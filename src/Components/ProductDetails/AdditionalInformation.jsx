import { useState } from 'react';
import './AdditionalInformation.css';

const AdditionalInformation = () => {
    const [selectedTab, setselectedTab] = useState(1);
    return (
        <div className='additional-info'>
            <div className="additional-info-tabs">
                <button className="tab">Description</button>
                <button className="tab">How to use</button>
                <button className="tab">Reviews</button>
            </div>
        </div>
    )
}

export default AdditionalInformation