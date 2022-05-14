import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const Corusel = () => {
    return (
        <div className="carusel">
            <div className="container">
                <UncontrolledCarousel
                    items={[
                        {
                        key: 1,
                        src: 'https://io.bellissimo.uz/images/a6e52a35-9e85-4041-90af-24ec042be754_uz.jpg'
                        },
                        {
                        key: 2,
                        src: 'https://io.bellissimo.uz/images/44fd9ae9-5a31-46dc-875e-57a9698ab1aa_uz.jpg'
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default Corusel;