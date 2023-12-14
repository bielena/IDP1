var wms_layers = [];

var format_budynki_small_0 = new ol.format.GeoJSON();
var features_budynki_small_0 = format_budynki_small_0.readFeatures(json_budynki_small_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_budynki_small_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_budynki_small_0.addFeatures(features_budynki_small_0);
var lyr_budynki_small_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_budynki_small_0, 
                style: style_budynki_small_0,
                interactive: true,
                title: '<img src="styles/legend/budynki_small_0.png" /> budynki_small'
            });

lyr_budynki_small_0.setVisible(true);
var layersList = [lyr_budynki_small_0];
lyr_budynki_small_0.set('fieldAliases', {'ogc_fid': 'ogc_fid', });
lyr_budynki_small_0.set('fieldImages', {'ogc_fid': 'TextEdit', });
lyr_budynki_small_0.set('fieldLabels', {'ogc_fid': 'no label', });
lyr_budynki_small_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});