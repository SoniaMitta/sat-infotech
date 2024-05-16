sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'cloudkitchen/kitchen/test/integration/FirstJourney',
		'cloudkitchen/kitchen/test/integration/pages/KitchenList',
		'cloudkitchen/kitchen/test/integration/pages/KitchenObjectPage'
    ],
    function(JourneyRunner, opaJourney, KitchenList, KitchenObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('cloudkitchen/kitchen') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheKitchenList: KitchenList,
					onTheKitchenObjectPage: KitchenObjectPage
                }
            },
            opaJourney.run
        );
    }
);