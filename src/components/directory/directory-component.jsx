import React from 'react';
import MenuItem from '../menu-item/menu-item-component';
import './directory-style.scss'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'HATS',
                imageUrl: 'https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg',
                id: 1
            },
            {
                title: 'ACCESSORIES',
                imageUrl: 'https://lh3.googleusercontent.com/proxy/rTfNQ8Qn_l3Kvo0oQ4DJNxKbEYksDbymG2y19KO5oVIlqd1f4bfpxLbEgtJ88KkTZc9Pi0APvOunyQ8s0_66I8w4TVtxsllNl3L_T93jO9ZERTrInj6FNm743V_gCB8G0NgBqMrP8Q4zyuAmJV8b3s9GEWiEDts0KRHsmB0hGwb0IDdDBaQj000a0srzrCgQ75qocytlrB2R8vMGoEbsBg8y3P7lWVZGPS7lx-0ih6HmGS0',
                id: 2
            },
            {
                title: 'BOOTS',
                imageUrl: "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/6/21/batch-upload/batch-upload_6d6de0ea-5b28-4995-80a9-b23eb5788790",
                id: 3
            },
            {
                title: 'WOMEN',
                imageUrl: 'https://www.sunberryfitness.com/wp-content/uploads/2015/02/K-pop-girl-dance-dress-up.jpg',
                size: 'large',
                id: 4
            },
            {
                title: 'MEN',
                imageUrl: 'https://images.unsplash.com/photo-1546427660-eb346c344ba5?ixlib=rb-1.2.1&w=1000&q=80',
                size: 'large',
                id: 5
            },]
        }
    };

    render() {
        return (
            <div className='directory-menu'>
                { this.state.sections.map(({id, ...PropertiLainnya}) => (
                    <MenuItem key={id} {...PropertiLainnya} />
                ))}
            </div>
        );
    };

};

// {/* { this.state.sections.map(({title, imageUrl, id, size}) => ( */}
// {/* kode di atas bisa dibuat simple dengan cara berikut */}
// {/* <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} history={this.props.history} /> */}

export default Directory;