import React from 'react';
import Modal from 'react-modal';
import { Button } from '@/components/ui/button';

Modal.setAppElement('body');  // Make sure to set your app element

type QuoteModalType = {
    isOpen: any
    onRequestClose: any
}

const QuoteModal: React.FC<QuoteModalType> = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                content: {
                    top: '10%',  // Increased from '50%' to start lower due to the sticky navbar
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -10%)', // Adjusted translate to align properly
                    backgroundColor: '#1A1A1A', // Dark background
                    color: 'white', // Text color
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                    maxWidth: '600px', // Set a max-width for the modal
                    width: '90%', // Use most of the screen width on smaller screens
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)', // Semi-transparent overlay
                    zIndex: 50  // Ensure overlay is above other content but below modal
                }
            }}
        >
             <button
                onClick={onRequestClose}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.5em',
                    cursor: 'pointer'
                }}
                aria-label="Close"
            >
                ×  {/* Cross symbol as close button */}
            </button>
            <h2 className="text-xl font-bold uppercase">Request a Quote</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-bold mb-2">Name (required)</label>
                    <input type="text" id="name" required className="w-full p-2 rounded-md bg-gray-700 text-white"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-bold mb-2">Email (required)</label>
                    <input type="email" id="email" required className="w-full p-2 rounded-md bg-gray-700 text-white"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone Number (required)</label>
                    <input type="tel" id="phone" required className="w-full p-2 rounded-md bg-gray-700 text-white"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-bold mb-2">Event Location</label>
                    <input type="text" id="location" className="w-full p-2 rounded-md bg-gray-700 text-white"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="service" className="block text-sm font-bold mb-2">Type of Service</label>
                    <select id="service" className="w-full p-2 rounded-md bg-gray-700 text-white">
                        <option>Studio rental</option>
                        <option>Equipment rental</option>
                        <option>Live event broadcast</option>
                        <option>Studio broadcast</option>
                        <option>Webinar</option>
                        <option>Live to tape recording</option>
                        <option>Podcast recording</option>
                        <option>Esports</option>
                        <option>Web development</option>
                        <option>Creative consultancy</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-bold mb-2">Basic Event or Service Description</label>
                    <textarea placeholder='Eg: I am hosting a LAN and I want to rent PCs and Screens, or I want a website built' id="description" rows={4} className="w-full p-2 rounded-md bg-gray-700 text-white"></textarea>
                </div>
                <Button type="submit" className="w-full mt-4" variant="default">
                    Submit
                </Button>
            </form>
        </Modal>
    );
};

export default QuoteModal;
