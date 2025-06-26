
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/form-submit', methods=['POST'])
def form_submit():
    try:
        # Get form data
        data = request.get_json()
        name = data.get('name', '')
        email = data.get('email', '')
        message = data.get('message', '')
        
        # Get environment variables
        telegram_token = os.getenv('TELEGRAM_TOKEN')
        telegram_chat_id = os.getenv('TELEGRAM_CHAT_ID')
        
        if not telegram_token or not telegram_chat_id:
            return jsonify({'error': 'Telegram configuration missing'}), 500
        
        # Format message for Telegram
        telegram_message = f"""
🔔 New Contact Form Submission

👤 Name: {name}
📧 Email: {email}

💬 Message:
{message}

---
Sent from Portfolio Website
        """
        
        # Send to Telegram
        telegram_url = f"https://api.telegram.org/bot{telegram_token}/sendMessage"
        telegram_payload = {
            'chat_id': telegram_chat_id,
            'text': telegram_message,
            'parse_mode': 'HTML'
        }
        
        response = requests.post(telegram_url, json=telegram_payload)
        
        if response.status_code == 200:
            return jsonify({'success': True, 'message': 'Form submitted successfully'}), 200
        else:
            return jsonify({'error': 'Failed to send message'}), 500
            
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)), debug=False)
