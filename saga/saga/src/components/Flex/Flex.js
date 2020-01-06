import React from 'react';
import './Flex.scss';

export default function Flex() {
    return (
        <div className="flex">
            <div className="flex__item" id="flex-item1">1</div>
            <div className="flex__item" id="flex-item2">2</div>
            <div className="flex__item" id="flex-item3">3</div>
            <div className="flex__item" id="flex-item4">4</div>
        </div>
    );
};
