import React from 'react';
import HomeCompanyProfile from '../components/HomeCompanyProfile';
import HomeInfoBoxs from '../components/HomeInfoBoxs';
import HomePO from '../components/HomePO';
import HomePP from '../components/HomePP';
import HomeRD from '../components/HomeRD';
import HomeSlider from '../components/HomeSlider';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <HomeInfoBoxs></HomeInfoBoxs>
            <HomeCompanyProfile></HomeCompanyProfile>
            <HomePO></HomePO>
            <HomePP></HomePP>
            <HomeRD></HomeRD>
        </div>
    );
};

export default Home;