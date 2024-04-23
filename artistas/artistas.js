const artists = [
    {
      name: 'BTS',
      members: ['RM', 'Jin', 'SUGA', 'j-hope', 'Jimin', 'V', 'Jung Kook'],
      genre: 'K-pop',
      debut: 2013
    },
    {
      name: 'BLACKPINK',
      members: ['Jisoo', 'Jennie', 'Rosé', 'Lisa'],
      genre: 'K-pop',
      debut: 2016
    },
    {
      name: 'EXO',
      members: ['Xiumin', 'Suho', 'Lay', 'Baekhyun', 'Chen', 'Chanyeol', 'D.O.', 'Kai', 'Sehun'],
      genre: 'K-pop',
      debut: 2012
    },
    {
      name: 'TWICE',
      members: ['Nayeon', 'Jeongyeon', 'Momo', 'Sana', 'Jihyo', 'Mina', 'Dahyun', 'Chaeyoung', 'Tzuyu'],
      genre: 'K-pop',
      debut: 2015
    },
    {
      name: 'IU',
      members: ['Lee Ji-eun'],
      genre: 'K-pop, Pop',
      debut: 2008
    },
    {
      name: 'BIGBANG',
      members: ['G-Dragon', 'T.O.P', 'Taeyang', 'Daesung', 'Seungri'],
      genre: 'K-pop, Hip-hop',
      debut: 2006
    },
    {
      name: 'PSY',
      members: ['Park Jae-sang'],
      genre: 'K-pop, Dance-pop',
      debut: 2001
    },
    {
      name: 'Red Velvet',
      members: ['Irene', 'Seulgi', 'Wendy', 'Joy', 'Yeri'],
      genre: 'K-pop',
      debut: 2014
    },
    {
      name: 'SEVENTEEN',
      members: ['S.Coups', 'Jeonghan', 'Joshua', 'Jun', 'Hoshi', 'Wonwoo', 'Woozi', 'DK', 'Mingyu', 'The8', 'Seungkwan', 'Vernon', 'Dino'],
      genre: 'K-pop',
      debut: 2015
    },
    {
      name: 'Epik High',
      members: ['Tablo', 'Mithra Jin', 'DJ Tukutz'],
      genre: 'Hip-hop',
      debut: 2003
    }
  ];
   
  const artistList = document.getElementById('artist-list');
 
artists.map(artist => {
  const card = document.createElement('div');
  card.className = 'col-md-4 mb-4';
  card.innerHTML = `
    <div class="card">
      <div class="card-body">
${artist.name}</h5>
        <p class="card-text">Género: ${artist.genre}</p>
        <p class="card-text">Miembros: ${artist.members.join(', ')}</p>
        <p class="card-text">Debut: ${artist.debut}</p>
      </div>
    </div>
  `;
  artistList.appendChild(card);
});