from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from datetime import datetime

app = Flask(__name__)
CORS(app)

DATABASE = 'notes.db'

def get_db_connection():
    """Create a database connection with row factory"""
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Initialize the database with proper schema"""
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS names (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()
    print("Database initialized successfully!")

init_db()

@app.route('/notes', methods=['POST', 'GET'])
def notes():
    """Handle GET all notes and POST new note"""
    if request.method == 'POST':
        data = request.get_json()

        # Validation
        if not data or 'name' not in data:
            return jsonify({'error': 'Name is required!'}), 400
        
        name = data['name'].strip()
        
        if not name:
            return jsonify({'error': 'Name cannot be empty!'}), 400

        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute('INSERT INTO names (name) VALUES (?)', (name,))
            conn.commit()
            note_id = cursor.lastrowid
            conn.close()
            
            return jsonify({
                'message': 'Name added successfully!',
                'id': note_id,
                'name': name
            }), 201
        except Exception as e:
            return jsonify({'error': f'Database error: {str(e)}'}), 500

    elif request.method == 'GET':
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute('SELECT id, name, created_at, updated_at FROM names ORDER BY id DESC')
            rows = cursor.fetchall()
            conn.close()

            names = [{
                'id': row['id'],
                'name': row['name'],
                'created_at': row['created_at'],
                'updated_at': row['updated_at']
            } for row in rows]
            
            return jsonify(names), 200
        except Exception as e:
            return jsonify({'error': f'Database error: {str(e)}'}), 500

@app.route('/notes/<int:name_id>', methods=['GET', 'PUT', 'DELETE'])
def note_operations(name_id):
    """Handle GET, PUT, and DELETE operations for a specific note"""
    
    if request.method == 'GET':
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute('SELECT id, name, created_at, updated_at FROM names WHERE id = ?', (name_id,))
            row = cursor.fetchone()
            conn.close()

            if not row:
                return jsonify({'error': 'Name not found!'}), 404

            note = {
                'id': row['id'],
                'name': row['name'],
                'created_at': row['created_at'],
                'updated_at': row['updated_at']
            }
            return jsonify(note), 200
        except Exception as e:
            return jsonify({'error': f'Database error: {str(e)}'}), 500

    elif request.method == 'PUT':
        data = request.get_json()

        # Validation
        if not data or 'name' not in data:
            return jsonify({'error': 'Name is required!'}), 400
        
        name = data['name'].strip()
        
        if not name:
            return jsonify({'error': 'Name cannot be empty!'}), 400

        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            
            # Update with current timestamp
            cursor.execute('''
                UPDATE names 
                SET name = ?, updated_at = CURRENT_TIMESTAMP 
                WHERE id = ?
            ''', (name, name_id))
            conn.commit()
            
            if cursor.rowcount == 0:
                conn.close()
                return jsonify({'error': 'Name not found!'}), 404
            
            conn.close()
            return jsonify({
                'message': 'Name updated successfully!',
                'id': name_id,
                'name': name
            }), 200
        except Exception as e:
            return jsonify({'error': f'Database error: {str(e)}'}), 500
    
    elif request.method == 'DELETE':
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute('DELETE FROM names WHERE id = ?', (name_id,))
            conn.commit()

            if cursor.rowcount == 0:
                conn.close()
                return jsonify({'error': 'Name not found!'}), 404
            
            conn.close()
            return jsonify({
                'message': 'Name deleted successfully!',
                'id': name_id
            }), 200
        except Exception as e:
            return jsonify({'error': f'Database error: {str(e)}'}), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'message': 'Notes API is running'
    }), 200

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({'error': 'Endpoint not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)