const desc = [``, `<h2>Harrow</h2>A harrow is a farm implement used to pulverize soil, break up crop residues, uproot weeds, and cover
            seed. In Neolithic times, soil was harrowed, or cultivated, with tree branches; shaped wooden harrows were
            used by the Egyptians and other ancient peoples, and the Romans made harrows with iron teeth. Modern harrows
            comprise several varieties. The horse-drawn or tractor-drawn spike-tooth harrow, or drag, developed in the
            early 19th century, has sections 1 to 1.5 meters (3 to 5 feet) wide with long spike teeth mounted nearly
            vertically on horizontal bars. It is used chiefly for pulverizing soil and for early cultivation (Tittanen,
            2018).
            <hr />
            <div class="cite">
                TITTANEN, A. 2018. Harrow [Online]. Encyclopædia Britannica. Available: <a href=" https://www.britannica.com/topic/harrow-agriculture" target="_blank"> https://www.britannica.com/topic/harrow-agriculture</a>
                [Accessed September 23 2020].
            </div>
            `,

    `<h2>Ash Hopper</h2>Before supermarkets and even before the local country store, Ozark people had to depend on their own 
            ingenuity and devices to provide the necessities and luxuries they had. This was true even of chemicals like lye 
            needed in making soap. Later concentrated lye in cans was available cheaply at the country stores, but before that 
            people made their own in ash hoppers. As wood ashes were taken from the fireplace, cook stove or heating stoves they 
            would be dumped outside into the ash hopper. Then when it rained, water would trickle through the ashes leaching out 
            the alkaline salts (sodium hydroxide), commonly known as lye (Brandt and Lucas, 1974).
            <hr />
            <div class="cite">
                BRANDT, T. & LUCAS, V. 1974. <span>Using Lye: Ash Hopper</span>[Online]. Available:<a
                    href="https://thelibrary.org/lochist/periodicals/bittersweet/sp74h.htm" target="_blank">
                    https://thelibrary.org/lochist/periodicals/bittersweet/sp74h.htm</a> [Accessed September 24 2020].
            </div>
            `,

    `<h2>Smokehouse</h2> XVIII century smokehouses in Virginia. Those smokehouses doubled up as storage facilities where
            meats after being smoked for two weeks were kept inside for up to two years. In the USA, smoking was more
            popular in the Eastern Parts of the country where slaves were working on tobacco and cotton plantations.
            Equally so, the abundance and popularity of pork contributed to the need for storage of butchered meat. In
            the east, smoking and pork meat are like the left and right hands of the body. In the western parts of the
            country, cowboys transported cattle across large distances where staples consisted of beef meat grilled on
            an open fire instead (Meats_and_Sausages, 2005-2020).
            <hr />
            <div class="cite">
                 MEATS_AND_SAUSAGES. 2005-2020. <span>American XVIII Century Smokehouses:</span>[Online]. Available:<a
                    href="https://www.meatsandsausages.com/smokehouse-plans/smokehouse-old" target="_blank">
                    https://www.meatsandsausages.com/smokehouse-plans/smokehouse-old</a> [Accessed September 25 2020].
            </div>`,

    `<h2>Butter Churn</h2>Home butter-making took time and energy, but only needed simple equipment. Low-tech methods
            were still well-known in rural parts of developed countries like the USA in the mid-20th century. After the
            cow(s) were milked, the milk was left to settle in a cool place, in shallow dishes, also called setting
            dishes or pancheons, so the cream would rise to the top. (Unless the butter was to be made from whole milk:
            less common than making it from cream.) Brass and earthenware dishes were used in the UK in the 17th and
            18th centuries, with earthenware becoming gradually more popular, as brass sometimes tainted the flavor
            (OldandInteresting.com, 2020).
            <hr />
            <div class="cite">
                OLDANDINTERESTING.COM. 2020. <span>Butter-making - home churns and utensils</span> [Online]. 
                Available: <a href="http://www.oldandinteresting.com/history-butter-churns.aspx" target="_blank">
                    http://www.oldandinteresting.com/history-butter-churns.aspx </a> 
                    [Accessed].
           
            </div>`


];

const annotationsObjects = [{
        id: 1,
        range: {
            start: 2,
            end: 4
        },
        shape: {
            x1: 12,
            x2: 54,
            y1: 35,
            y2: 95
        },
        comments: [{
            id: 1,
            meta: {
                datetime: new Date(),
                user_id: 1,
                user_name: 'Jack Pope'
            },

            body: 'Harrow'
        }]
    },

    {
        id: 2,
        range: {
            start: 6,
            end: 8
        },
        shape: {
            x1: 64,
            x2: 89,
            y1: 50,
            y2: 86
        },
        comments: [{
            id: 2,
            meta: {
                datetime: new Date(),
                user_id: 1,
                user_name: ' '
            },
            body: 'Ash Hopper'
        }]
    },
    {
        id: 3,
        range: {
            start: 11,
            end: 13.5
        },
        shape: {
            x1: 52,
            y1: 31,
            x2: 84,
            y2: 66
        },
        comments: [{
            id: 3,
            meta: {
                datetime: new Date(),
                user_id: 1,
                user_name: ' '
            },
            body: 'Smokehouse'
        }]
    },

    {
        id: 4,
        range: {
            start: 16,
            end: 18.5
        },
        shape: {
            x1: 39,
            y1: 41,
            x2: 51,
            y2: 71
        },
        comments: [{
            id: 4,
            meta: {
                datetime: new Date(),
                user_id: 1,
                user_name: ' '
            },
            body: 'Butter Churn'
        }]
    }

];

const pluginOptions = {
    // Collection of annotation data to initialize
    annotationsObjects: annotationsObjects,
    startInAnnotationMode: true,
    internalCommenting: false,
    showCommentList: false
};


function initVideoAnnotations() {
    console.log("HEY HEY HEY!!!");
    var player = videojs('my-video');
    var plugin = player.annotationComments(pluginOptions)
    // annotationOpened : Fired whenever an annotation is opened
    plugin.registerListener('annotationOpened', (event) => {
        let annId = event.detail.annotation.id;
        const detailContainer = document.querySelector('#ann-details');
        if (annId > 0) {
            detailContainer.innerHTML = desc[annId];
        }


        console.log(event);

        console.log(event.detail.annotation.id);

        // event.detail =
        // {
        //      annotation: (object) annotation data in format {id:.., comments:..., range:..., shape:...},
        //      triggered_by_timeline: (boolean) TRUE = the event was triggered via a timeline action (like scrubbing or playing), FALSE = the annotation was opened via marker click, UI button interactions, or API/event input
        // }
    });
    // annotationClosed : Fired whenever an annotation is closed
    plugin.registerListener('annotationClosed', (event) => {
        let annId = event.detail.id;
        const detailContainer = document.querySelector('#ann-details');
        if (annId > 3) {
            detailContainer.innerHTML = "";
        }
        // event.detail = annotation (object) in format {id:.., comments:..., range:..., shape:...}
    });
}