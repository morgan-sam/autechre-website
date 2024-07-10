const TourList = () => {
  const listItemClass = `flex flex-col w-full gap-x-4 md:flex-row`;
  const dateClass = `text-white font-bold `;
  const locationClass = `text-white`;
  const venueClass = `text-white font-light`;

  return (
    <ol className="pt-[3.5rem] mb-24  flex flex-col z-10 gap-y-2">
      <li className={listItemClass}>
        <span className={dateClass}>MONDAY 30 SEPTEMBER</span>
        <span className={locationClass}>OSLO, NORWAY</span>
        <span className={venueClass}>SENTRUM SCENE</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>WEDNESDAY 2 OCTOBER</span>
        <span className={locationClass}>STOCKHOLM, SWEDEN</span>
        <span className={venueClass}>SLAKTKYRKAN</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>FRIDAY 4 OCTOBER</span>
        <span className={locationClass}>RIGA, LATVIA</span>
        <span className={venueClass}>SKANU MEZS</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>SUNDAY 6 OCTOBER</span>
        <span className={locationClass}>COPENHAGEN, DENMARK</span>
        <span className={venueClass}>VEGA</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>TUESDAY 8 OCTOBER</span>
        <span className={locationClass}>HELSINKI, FINLAND</span>
        <span className={venueClass}>TAVASTIA</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>THURSDAY 10 OCTOBER</span>
        <span className={locationClass}>BERLIN, GERMANY</span>
        <span className={venueClass}>BERGHAIN</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>SATURDAY 12 OCTOBER</span>
        <span className={locationClass}>PRAGUE, CZECH REPUBLIC</span>
        <span className={venueClass}>LUCERNA MUSIC BAR</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>MONDAY 14 OCTOBER</span>
        <span className={locationClass}>VIENNA, AUSTRIA</span>
        <span className={venueClass}>WUK</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>WEDNESDAY 16 OCTOBER</span>
        <span className={locationClass}>ZURICH, SWITZERLAND</span>
        <span className={venueClass}>KAUFLEUTEN</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>FRIDAY 18 OCTOBER</span>
        <span className={locationClass}>PARIS, FRANCE</span>
        <span className={venueClass}>LE TRIANON</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>SUNDAY 20 OCTOBER</span>
        <span className={locationClass}>BRUSSELS, BELGIUM</span>
        <span className={venueClass}>ANCIENNE BELGIQUE</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>TUESDAY 22 OCTOBER</span>
        <span className={locationClass}>AMSTERDAM, NETHERLANDS</span>
        <span className={venueClass}>PARADISO</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>THURSDAY 24 OCTOBER</span>
        <span className={locationClass}>LONDON, UK</span>
        <span className={venueClass}>O2 ACADEMY BRIXTON</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>SATURDAY 26 OCTOBER</span>
        <span className={locationClass}>MANCHESTER, UK</span>
        <span className={venueClass}>ALBERT HALL</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>MONDAY 28 OCTOBER</span>
        <span className={locationClass}>DUBLIN, IRELAND</span>
        <span className={venueClass}>VICAR STREET</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>WEDNESDAY 30 OCTOBER</span>
        <span className={locationClass}>GLASGOW, UK</span>
        <span className={venueClass}>BARROWLAND BALLROOM</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>FRIDAY 1 NOVEMBER</span>
        <span className={locationClass}>EDINBURGH, UK</span>
        <span className={venueClass}>USHER HALL</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>SUNDAY 3 NOVEMBER</span>
        <span className={locationClass}>BIRMINGHAM, UK</span>
        <span className={venueClass}>O2 INSTITUTE</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>TUESDAY 5 NOVEMBER</span>
        <span className={locationClass}>CARDIFF, UK</span>
        <span className={venueClass}>TRAMSHED</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>THURSDAY 7 NOVEMBER</span>
        <span className={locationClass}>LISBON, PORTUGAL</span>
        <span className={venueClass}>COLISEU DOS RECREIOS</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>SATURDAY 9 NOVEMBER</span>
        <span className={locationClass}>MADRID, SPAIN</span>
        <span className={venueClass}>LA RIVIERA</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>MONDAY 11 NOVEMBER</span>
        <span className={locationClass}>BARCELONA, SPAIN</span>
        <span className={venueClass}>APOLO</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>WEDNESDAY 13 NOVEMBER</span>
        <span className={locationClass}>MILAN, ITALY</span>
        <span className={venueClass}>FABRIQUE</span>
      </li>
      <li className={listItemClass}>
        <span className={dateClass}>FRIDAY 15 NOVEMBER</span>
        <span className={locationClass}>ROME, ITALY</span>
        <span className={venueClass}>ORION</span>
      </li>
    </ol>
  );
};

export default TourList;
