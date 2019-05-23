import React from 'react';

export default function GroupDashboard(group) {

    return (
        <>
            <a href='#'>
                <div className='groups-table'>
                    <ul className='group-name'>
                        <li>{group.name}</li>
                    </ul> -
                    <ul className='group-description'>
                        <li>{group.description}</li>
                    </ul>
                </div>
            </a>
        </>
    );
}