/*
 * File: app/controller/assistantRequetageController.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('KECMdesktop.controller.assistantRequetageController', {
    extend: 'Ext.app.Controller',

    views: [
        'assisstantRE4',
        'regleChampAR'
    ],

    suivant: function(button, e, options) {
        var nextOK = 1;
        var etapeC = button.up().up().getLayout().getActiveItem().items.items;
        var i = 0;
        for (i=0;i<etapeC.length; i++) {
            if ((etapeC[i].isXType('field'))&&(!(etapeC[i].isValid()))) { nextOK = 0;}
        }
        if (nextOK == 1) {

            var etape = button.up().up().getLayout().getActiveItem();
            if (etape.id=='assisstantRE1') {
                Ext.getCmp('assisstantRE2').removeAll();
                var reglesAnciennes= Ext.clone(Ext.getCmp('assisstantRE4').items.items.length);
                var m =2;
                for (m=2; m<reglesAnciennes; m++){
                    Ext.getCmp('assisstantRE4').getComponent(2).destroy();
                }

                var storeL = Ext.create('Ext.data.Store', {
                    fields: ['valeur', 'nom'],
                    data : [
                    {valeur: 'et', nom :'ET'},
                    {valeur: 'ou', nom :'OU'}
                    ]
                });

                var lien = Ext.create('Ext.form.ComboBox', {
                    anchor: '100%',
                    fieldLabel: 'Relation entre les règles ',
                    store: storeL,
                    value: 'OU',
                    queryMode: 'local',
                    displayField: 'nom',
                    valueField: 'valeur',
                    labelWidth: 150,
                    editable: false,
                    forceSelect: true,
                    allowBlank: false

                });


                var typesContenus = Ext.getCmp('champTCRequeteur').getValue();
                var champsRegles = [ ];
                champsRegles.push({nom:'Création',
                    valeur: {
                        cType: 'datefield',
                        name: 'creation',
                        label: 'Création'
                    }
                });
                champsRegles.push({nom:'Dernière modification',
                    valeur: {
                        cType: 'datefield',
                        name: 'derniereModification',
                        label: 'Dernière modification'
                    }});
                    if (typesContenus.length<2) {
                        var champsReq = Ext.clone(Ext.getStore('TypesContenusDataJson').findRecord('type',typesContenus[0]).data.champs);
                        var champsEligibles = ["datefield", "timefield", "checkboxfield", "numberfield"];
                        var champsReqF = Ext.Array.filter(champsReq, function(champ){
                            if (Ext.Array.contains(champsEligibles, champ.cType)) {return true;} else {return false;}
                        });
                        champsReqF = Ext.Array.map(champsReqF, function(champ){
                            return ({nom:typesContenus[0]+ ' > '+champ.config.fieldLabel, valeur:{cType: champ.cType, name: champ.config.name, label: typesContenus[0]+' > '+champ.config.fieldLabel}});
                        });

                        champsRegles = Ext.Array.merge(champsRegles, champsReqF);

                    }

                    var typesDEP = Ext.Array.pluck(Ext.getStore('TypesContenusDataJson').findRecord('type',typesContenus[0]).data.typesImbriques, 'type');
                    var j = 1;
                    for (j=1; j<typesContenus.length; j++) {
                        var typesDEPSuivant = Ext.Array.pluck(Ext.getStore('TypesContenusDataJson').findRecord('type',typesContenus[j]).data.typesImbriques, 'type');
                        typesDEP = Ext.Array.intersect(typesDEP, typesDEPSuivant);
                    }
                    var k=0;
                    for (k=0; k<typesDEP.length; k++) {
                        champsRegles.push({nom:typesDEP[k]+' > '+'Création',
                            valeur: {
                                cType: 'datefield',
                                name: 'creation',
                                label: typesDEP[k]+' > '+'Création'
                            }
                        });
                        champsRegles.push({nom:typesDEP[k]+' > '+'Dernière modification',
                            valeur: {
                                cType: 'datefield',
                                name: 'derniereModification',
                                label: typesDEP[k]+' > '+'Dernière modification'
                            }});  


                            var champsReq = Ext.clone(Ext.getStore('TypesContenusDataJson').findRecord('type',typesDEP[k]).data.champs);
                            var champsEligibles = ["datefield", "timefield", "checkboxfield", "numberfield"];
                            var champsReqF = Ext.Array.filter(champsReq, function(champ){
                                if (Ext.Array.contains(champsEligibles, champ.cType)) {return true;} else {return false;}
                            });
                            champsReqF = Ext.Array.map(champsReqF, function(champ){
                                return ({nom:typesDEP[k]+ ' > '+champ.config.fieldLabel, valeur:{cType: champ.cType, name: champ.config.name, label: typesDEP[k]+' > '+champ.config.fieldLabel}});
                            });

                            champsRegles = Ext.Array.merge(champsRegles, champsReqF);




                        }

                        Ext.getStore('champsTCARStore').loadData(champsRegles);



                        var vocabulaires = Ext.Array.pluck(Ext.getStore('TypesContenusDataJson').findRecord('type',typesContenus[0]).data.vocabulaires, 'titre');
                        var j = 1;
                        for (j=1; j<typesContenus.length; j++) {
                            var vocabSuivant = Ext.Array.pluck(Ext.getStore('TypesContenusDataJson').findRecord('type',typesContenus[j]).data.vocabulaires, 'titre');
                            vocabulaires = Ext.Array.intersect(vocabulaires, vocabSuivant);
                        }

                        if (vocabulaires.length>1) {Ext.getCmp('assisstantRE2').add(lien);}

                        var k =0;
                        for (k=0; k<vocabulaires.length; k++) {
                            var leVocab = Ext.getStore('TaxonomieDataJson').findRecord('titre', vocabulaires[k]);
                            var vocabAPlat= [ ];
                            this.miseAPlatTaxo(leVocab.data.termes.children, vocabAPlat);


                            var storeT = Ext.create('Ext.data.Store', {
                                fields: ['terme'],
                                data : vocabAPlat
                            });


                            var selecteur = Ext.widget('comboboxselect', {
                                anchor: '100%',
                                fieldLabel: 'Termes ',
                                autoScroll: false,
                                store: storeT,
                                queryMode: 'local',
                                displayField: 'terme',
                                valueField: 'terme',
                                filterPickList: true,
                                typeAhead: true,
                                forceSelection: !leVocab.data.etiquettes,
                                createNewOnEnter: leVocab.data.etiquettes,
                                multiSelect: true,
                                allowBlank: true
                            });

                            var storeR = Ext.create('Ext.data.Store', {
                                fields: ['valeur', 'nom'],
                                data : [
                                {valeur: 'all', nom :'Contient tous les termes'},
                                {valeur: 'allRec', nom :'Contient tous les termes ou au moins un descendant par terme'},
                                {valeur: 'some', nom :'Contient au moins un des termes'},
                                {valeur: 'someRec', nom :'Contient au moins un des termes ou au moins un des descendants d’un des termes'}
                                ]
                            });

                            var regle = Ext.create('Ext.form.ComboBox', {
                                anchor: '100%',
                                fieldLabel: 'Règle',
                                store: storeR,
                                queryMode: 'local',
                                displayField: 'nom',
                                valueField: 'valeur',
                                editable: false,
                                forceSelect: true,
                                allowBlank: false

                            });


                            var enrobage = Ext.widget('fieldset', {
                                title : vocabulaires[k],
                                collapsible: true


                            });
                            enrobage.add(selecteur);
                            enrobage.add(regle);
                            Ext.getCmp('assisstantRE2').add(enrobage);



                        }    

                    }




                    var tousET= Ext.getCmp('assistantRequetage').getLayout().getLayoutItems().length;
                    var suivET= Ext.getCmp('assistantRequetage').getLayout().getNext().etape;
                    if (suivET==4) { Ext.getCmp('boutonNextRequeteur').hide();}
                    else if (suivET==2) { Ext.getCmp('boutonPrevRequeteur').show();}
                    if (Ext.isDefined(suivET)) {
                        button.up().up().getLayout().next();

                        Ext.getCmp('progressAR').updateProgress(suivET/tousET, 'Etape '+suivET+' sur '+tousET);
                    }
                }

    },

    precedent: function(button, e, options) {
        var tousET= Ext.getCmp('assistantRequetage').getLayout().getLayoutItems().length;
        var suivET= Ext.getCmp('assistantRequetage').getLayout().getPrev().etape;
        if (suivET==3) { Ext.getCmp('boutonNextRequeteur').show();}
        else if (suivET==1) { Ext.getCmp('boutonPrevRequeteur').hide();}
        if (Ext.isDefined(suivET)) {
            button.up().up().getLayout().prev();
            Ext.getCmp('progressAR').updateProgress(suivET/tousET, 'Etape '+suivET+' sur '+tousET);
        }
    },

    enleveRegle: function(button, e, options) {
        if (Ext.getCmp('assisstantRE4').items.items.indexOf(button.up().up())==2) {
            Ext.getCmp('assisstantRE4').getComponent(3).getComponent(0).getComponent(0).destroy();  
        }
        button.up().up().destroy();
    },

    selectAllTC: function(button, e, options) {
        Ext.getCmp('champTCRequeteur').select(Ext.getCmp('champTCRequeteur').getStore().data.items);
    },

    ajoutRegleChamp: function(button, e, options) {
        var nRegle= Ext.getCmp('createurReglesChampsAR').getValue();
        if (nRegle !== null) {
            var enrobage = Ext.widget('regleChampAR');
            enrobage.getComponent(0).getComponent('nomChamp').setText(nRegle.label);
            enrobage.getComponent(0).insert(1,Ext.widget(nRegle.cType, {flex:1, mame:nRegle.name}));
            if (nRegle.cType== 'checkboxfield') {
                var operateur= Ext.widget('tbtext', {text: ' = '});
            }
            else{
                var storeOper = Ext.create('Ext.data.Store', {
                    fields: ['operateur'],
                    data : [
                    {"operateur":"="},
                    {"operateur":"<="},
                    {"operateur":"<"},
                    {"operateur":">="},
                    {"operateur":">"},
                    {"operateur":"!="}
                    ]
                });
                var operateur= Ext.create('Ext.form.ComboBox', {
                    store: storeOper,
                    flex:1,
                    queryMode: 'local',
                    displayField: 'operateur',
                    valueField: 'operateur',
                    editable: false,
                    multiSelect:false,
                    allowBlank:false,
                    forceSelect: true
                });


            }
            enrobage.getComponent(0).insert(1,operateur);
            if (Ext.getCmp('assisstantRE4').items.items.length>2){
                enrobage.getComponent(0).insert(0,Ext.widget('tbtext', {text: '<b>ET </b>'}));
            }

            Ext.getCmp('assisstantRE4').add(enrobage);
        }
    },

    miseAPlatTaxo: function(cible, resultat) {
        var e=0;
        for (e=0; e<cible.length; e++) {
            resultat.push({terme: cible[e].text});
            this.miseAPlatTaxo(cible[e].children, resultat);
        }
    },

    onControllerClickStub: function() {

    },

    init: function() {
        this.control({
            "#boutonNextRequeteur": {
                click: this.suivant
            },
            "#boutonPrevRequeteur": {
                click: this.precedent
            },
            "[itemId='boutonEnleveRegleAR']": {
                click: this.enleveRegle
            },
            "#boutonSelectAllTCAR": {
                click: this.selectAllTC
            },
            "#boutonCreateurReglesChampsAR": {
                click: this.ajoutRegleChamp
            }
        });

    }

});
