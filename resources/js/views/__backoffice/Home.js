import React from 'react';
import { Typography } from '@material-ui/core';

import { Master as MasterLayout } from './layouts';

function Home(props) {



    return (
        <MasterLayout
            {...props}
            pageTitle={Lang.get('navigation.recipes')}
            showBreadcrumbs={false}
        >
            <Typography  style={{"marginTop":"24px"}}>We found those recipes based on your inventory</Typography>


        </MasterLayout>
    );
}

export default Home;
