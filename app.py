
from flask import Flask, send_from_directory, request, jsonify
import os

app = Flask(__name__, static_folder='dist')

# API route for contact form
@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    # In a production environment, you would process the form data
    # e.g., send an email or save to a database
    print(f"Contact form submission: {data}")
    return jsonify({"success": True, "message": "Message received"})

# Resume download route
@app.route('/api/resume', methods=['GET'])
def get_resume():
    return send_from_directory('public/resume', 'mohan_karthikeyan_cv.pdf')

# Serve React App (for production)
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
