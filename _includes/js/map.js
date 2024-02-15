window.conference.map = (() => {
    let config;
    let lang;

    let map;

    const setup = (elId) => {
        map = L.map(elId, {
            scrollWheelZoom: false
        }).setView(config.home_coord, config.default_zoom);

        L.tileLayer.provider(config.map_provider).addTo(map);

        L.easyButton('far fa-star', () => {
            map.flyTo(config.home_coord, config.default_zoom);
        }, lang.focus_conf).addTo(map);

        L.control.locate({
            flyTo: true,
            strings: {
                title: lang.focus_me
            }
        }).addTo(map);

        let location_marker = L.marker([40.824786543313365, 14.194593429565431])
        location_marker.addTo(map)
            .bindPopup(`<div style="font-size: 1.5em; font-family: 'Titillium Web';"><strong>Facoltà di Ingegneria</strong><br>Piazzale Tecchio, 80</div>`)
            .openPopup();
    };

    const init = (c, l) => {
        config = c;
        lang = l;

        const elId = 'map';

        if (document.getElementById(elId)) {
            setup(elId);
        }
    };

    const getMap = () => {
        return map
    };

    return {
        init: init,
        getMap: getMap
    };
})();
