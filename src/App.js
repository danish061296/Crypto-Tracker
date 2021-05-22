import './App.css';
import '@fontsource/roboto';
import React from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  media: {
    height: 30,
    width: 30,
  },
});

function App() {
  const API_ENDPOINT =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
  const classes = useStyles();

  const [cryptoData, setCryptoData] = React.useState([]);
  const [cryptoSearch, setCryptoSearch] = React.useState('');

  React.useEffect(() => {
    axios
      .get(API_ENDPOINT)
      .then((response) => {
        console.log(response.data);
        setCryptoData(response.data);
      })
      .catch((e) => console.log(e));
  });

  const filteredCrypto = cryptoData.filter((crypto) =>
    crypto.name.toLowerCase().includes(cryptoSearch.toLocaleLowerCase())
  );

  return (
    <div className="crypto__tracker">
      <div className="crypto__search">
        <h1 className="crypto__searchHeading">Search Coin</h1>
        <input
          type="text"
          className="crypto__searchBar"
          placeholder="Search by coin name"
          onChange={(e) => setCryptoSearch(e.target.value)}
        />
      </div>
      <div className="crypto__container">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Coin</strong>
                </TableCell>
                <TableCell>
                  <strong>Name</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Symbol</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Price</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Price Change</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>Volume</strong>
                </TableCell>
                <TableCell align="right">
                  <strong>NMarket Captial</strong>{' '}
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredCrypto.map((coin) => (
                <TableRow key={coin.id}>
                  <TableCell component="th" scope="row">
                    <CardMedia
                      className={classes.media}
                      image={coin.image}
                      title="Crypto-Currency"
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {coin.name}
                  </TableCell>
                  <TableCell align="right">{coin.symbol}</TableCell>
                  <TableCell align="right">
                    {coin.current_price.toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </TableCell>
                  <TableCell align="right">{coin.total_volume}</TableCell>
                  <TableCell align="right">
                    <strong>Mkt. Cap:</strong>
                    {coin.market_cap.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default App;
