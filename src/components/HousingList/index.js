import React from 'react'
import Housing from '../Housing'

function HousingList(props) {
    const {
        housings,
        handleHousingDelete,
        handleEditFormRender
    } = props;

    const housingElems = housings.map((housing) => {
        return (
            <li key={housing.number}>
                <Housing
                    housing={housing}
                    handleEditFormRender={handleEditFormRender}
                    handleHousingDelete={handleHousingDelete}
                />
            </li>
        );
    })

    return (
        <ul style={{'listStyleType': 'none', 'padding': '0'}} >
            {housingElems}
        </ul>
    )
}

export default HousingList
