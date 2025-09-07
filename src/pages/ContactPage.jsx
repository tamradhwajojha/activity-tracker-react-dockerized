import React from 'react';
import Card from '../components/UI/Card';

const ContactPage = () => {
    return (
        <Card className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                Have questions, feedback, or suggestions? We'd love to hear from you!
            </p>
            <div className="space-y-4">
                <div>
                    <p className="text-gray-600 font-semibold">Connect on LinkedIn:</p>
                    <a href="#" className="text-indigo-600 hover:underline">linkedin.com/in/tamradhwaj-ojha/</a>
                </div>
                <div>
                    <p className="text-gray-600 font-semibold">Visit my GitHub:</p>
                    <a href="linkedin.com/in/tamradhwaj-ojha/" className="text-indigo-600 hover:underline">github.com/tamradhwajojha</a>
                </div>
            </div>
        </Card>
    );
};

export default ContactPage;
//this comment is to test the commit