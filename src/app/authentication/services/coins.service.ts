import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

private coins:[
  {
      "id": 1, 
      "name": "Bitcoin", 
      "symbol": "BTC", 
      "website_slug": "bitcoin"
  }, 
  {
      "id": 2, 
      "name": "Litecoin", 
      "symbol": "LTC", 
      "website_slug": "litecoin"
  }, 
  {
      "id": 3, 
      "name": "Namecoin", 
      "symbol": "NMC", 
      "website_slug": "namecoin"
  }, 
  {
      "id": 4, 
      "name": "Terracoin", 
      "symbol": "TRC", 
      "website_slug": "terracoin"
  }, 
  {
      "id": 5, 
      "name": "Peercoin", 
      "symbol": "PPC", 
      "website_slug": "peercoin"
  }, 
  {
      "id": 6, 
      "name": "Novacoin", 
      "symbol": "NVC", 
      "website_slug": "novacoin"
  }, 
  {
      "id": 8, 
      "name": "Feathercoin", 
      "symbol": "FTC", 
      "website_slug": "feathercoin"
  }, 
  {
      "id": 9, 
      "name": "Mincoin", 
      "symbol": "MNC", 
      "website_slug": "mincoin"
  }, 
  {
      "id": 10, 
      "name": "Freicoin", 
      "symbol": "FRC", 
      "website_slug": "freicoin"
  }, 
  {
      "id": 13, 
      "name": "Ixcoin", 
      "symbol": "IXC", 
      "website_slug": "ixcoin"
  }, 
  {
      "id": 14, 
      "name": "BitBar", 
      "symbol": "BTB", 
      "website_slug": "bitbar"
  }, 
  {
      "id": 16, 
      "name": "WorldCoin", 
      "symbol": "WDC", 
      "website_slug": "worldcoin"
  }, 
  {
      "id": 18, 
      "name": "Digitalcoin", 
      "symbol": "DGC", 
      "website_slug": "digitalcoin"
  }, 
  {
      "id": 25, 
      "name": "GoldCoin", 
      "symbol": "GLD", 
      "website_slug": "goldcoin"
  }, 
  {
      "id": 31, 
      "name": "Argentum", 
      "symbol": "ARG", 
      "website_slug": "argentum"
  }, 
  {
      "id": 32, 
      "name": "Fastcoin", 
      "symbol": "FST", 
      "website_slug": "fastcoin"
  }, 
  {
      "id": 34, 
      "name": "Bitgem", 
      "symbol": "BTG", 
      "website_slug": "bitgem"
  }, 
  {
      "id": 35, 
      "name": "Phoenixcoin", 
      "symbol": "PXC", 
      "website_slug": "phoenixcoin"
  }, 
  {
      "id": 37, 
      "name": "Megacoin", 
      "symbol": "MEC", 
      "website_slug": "megacoin"
  }, 
  {
      "id": 41, 
      "name": "Infinitecoin", 
      "symbol": "IFC", 
      "website_slug": "infinitecoin"
  }, 
  {
      "id": 42, 
      "name": "Primecoin", 
      "symbol": "XPM", 
      "website_slug": "primecoin"
  }, 
  {
      "id": 43, 
      "name": "Anoncoin", 
      "symbol": "ANC", 
      "website_slug": "anoncoin"
  }, 
  {
      "id": 45, 
      "name": "CasinoCoin", 
      "symbol": "CSC", 
      "website_slug": "casinocoin"
  }, 
  {
      "id": 49, 
      "name": "Bullion", 
      "symbol": "CBX", 
      "website_slug": "bullion"
  }, 
  {
      "id": 50, 
      "name": "Emerald Crypto", 
      "symbol": "EMD", 
      "website_slug": "emerald"
  }, 
  {
      "id": 51, 
      "name": "GlobalCoin", 
      "symbol": "GLC", 
      "website_slug": "globalcoin"
  }, 
  {
      "id": 52, 
      "name": "Ripple", 
      "symbol": "XRP", 
      "website_slug": "ripple"
  }, 
  {
      "id": 53, 
      "name": "Quark", 
      "symbol": "QRK", 
      "website_slug": "quark"
  }, 
  {
      "id": 56, 
      "name": "Zetacoin", 
      "symbol": "ZET", 
      "website_slug": "zetacoin"
  }, 
  {
      "id": 57, 
      "name": "SecureCoin", 
      "symbol": "SRC", 
      "website_slug": "securecoin"
  }, 
  {
      "id": 58, 
      "name": "Sexcoin", 
      "symbol": "SXC", 
      "website_slug": "sexcoin"
  }, 
  {
      "id": 61, 
      "name": "TagCoin", 
      "symbol": "TAG", 
      "website_slug": "tagcoin"
  }, 
  {
      "id": 63, 
      "name": "I0Coin", 
      "symbol": "I0C", 
      "website_slug": "i0coin"
  }, 
  {
      "id": 64, 
      "name": "FlorinCoin", 
      "symbol": "FLO", 
      "website_slug": "florincoin"
  }, 
  {
      "id": 66, 
      "name": "Nxt", 
      "symbol": "NXT", 
      "website_slug": "nxt"
  }, 
  {
      "id": 67, 
      "name": "Unobtanium", 
      "symbol": "UNO", 
      "website_slug": "unobtanium"
  }, 
  {
      "id": 68, 
      "name": "Joulecoin", 
      "symbol": "XJO", 
      "website_slug": "joulecoin"
  }, 
  {
      "id": 69, 
      "name": "Datacoin", 
      "symbol": "DTC", 
      "website_slug": "datacoin"
  }, 
  {
      "id": 70, 
      "name": "BetaCoin", 
      "symbol": "BET", 
      "website_slug": "betacoin"
  }, 
  {
      "id": 71, 
      "name": "GrandCoin", 
      "symbol": "GDC", 
      "website_slug": "grandcoin"
  }, 
  {
      "id": 72, 
      "name": "Deutsche eMark", 
      "symbol": "DEM", 
      "website_slug": "deutsche-emark"
  }, 
  {
      "id": 74, 
      "name": "Dogecoin", 
      "symbol": "DOGE", 
      "website_slug": "dogecoin"
  }, 
  {
      "id": 75, 
      "name": "NetCoin", 
      "symbol": "NET", 
      "website_slug": "netcoin"
  }, 
  {
      "id": 76, 
      "name": "Philosopher Stones", 
      "symbol": "PHS", 
      "website_slug": "philosopher-stones"
  }, 
  {
      "id": 77, 
      "name": "Diamond", 
      "symbol": "DMD", 
      "website_slug": "diamond"
  }, 
  {
      "id": 78, 
      "name": "HoboNickels", 
      "symbol": "HBN", 
      "website_slug": "hobonickels"
  }, 
  {
      "id": 79, 
      "name": "Tigercoin", 
      "symbol": "TGC", 
      "website_slug": "tigercoin"
  }, 
  {
      "id": 80, 
      "name": "Orbitcoin", 
      "symbol": "ORB", 
      "website_slug": "orbitcoin"
  }, 
  {
      "id": 83, 
      "name": "Omni", 
      "symbol": "OMNI", 
      "website_slug": "omni"
  }, 
  {
      "id": 84, 
      "name": "Catcoin", 
      "symbol": "CAT", 
      "website_slug": "catcoin"
  }, 
  {
      "id": 87, 
      "name": "FedoraCoin", 
      "symbol": "TIPS", 
      "website_slug": "fedoracoin"
  }, 
  {
      "id": 88, 
      "name": "RonPaulCoin", 
      "symbol": "RPC", 
      "website_slug": "ronpaulcoin"
  }, 
  {
      "id": 89, 
      "name": "Mooncoin", 
      "symbol": "MOON", 
      "website_slug": "mooncoin"
  }, 
  {
      "id": 90, 
      "name": "Dimecoin", 
      "symbol": "DIME", 
      "website_slug": "dimecoin"
  }, 
  {
      "id": 93, 
      "name": "42-coin", 
      "symbol": "42", 
      "website_slug": "42-coin"
  }, 
  {
      "id": 99, 
      "name": "Vertcoin", 
      "symbol": "VTC", 
      "website_slug": "vertcoin"
  }, 
  {
      "id": 101, 
      "name": "KlondikeCoin", 
      "symbol": "KDC", 
      "website_slug": "klondikecoin"
  }
]
  getCoins() {
      return this.coins;
  }

}