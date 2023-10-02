function attachEventsListeners() {

    let units = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    let inputDistanceElement = document.getElementById('inputDistance');
    let outputDistanceElement = document.getElementById('outputDistance');

    let convertBtnElement = document.getElementById('convert');

    let inputUnitsElement = document.getElementById('inputUnits');
    let outputUnitsElement = document.getElementById('outputUnits');

    convertBtnElement.addEventListener('click', convert);

    function convert(){

        let inputUnitMeasure = inputUnitsElement.value;
        let outputUnitMeasure = outputUnitsElement.value;
        let unit = inputDistanceElement.value;

        let meterDistance = Number(units[inputUnitMeasure]) * Number(unit);
        outputDistanceElement.value = meterDistance / Number(units[outputUnitMeasure]);
    }
}