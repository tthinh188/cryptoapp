import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../Services/CryptoApi';
import { Cryptocurrencies, News } from '../Components';

const { Title } = Typography

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    console.log(data);

    if (isFetching) return "Loading ...";

    else {
        return (
            <div>
                <Title level={2} className="heading">Global Crypto Stats</Title>
                <Row>
                    <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                    <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                    <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
                    <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
                    <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)} /></Col>
                </Row>
                <div className="home-heading-container">
                    <Title level={2} className="home-title">Top 10 Cryoptocurrencies in the world</Title>
                    <Title level={2} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
                </div>
                <Cryptocurrencies simplified/>
                <div className="home-heading-container">
                    <Title level={2} className="home-title">Lastest Crypto News</Title>
                    <Title level={2} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
                </div>
                <News simplified />
            </div>
        )
    }
}

export default Homepage
