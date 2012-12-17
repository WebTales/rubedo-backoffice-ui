/*
 * File: app/controller/assistantRequetageController.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Rubedo.controller.assistantRequetageController', {
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
                        var myThingType=Ext.getStore('TCNDepCombo').findRecord('id',typesContenus[0]);
                        var champsReq = Ext.clone(myThingType.data.champs);
                        var champsEligibles = ["Ext.form.field.Date", "Ext.form.field.Time", "Ext.form.field.Checkbox", "Ext.form.field.Number"];
                        var champsReqF = Ext.Array.filter(champsReq, function(champ){
                            if (Ext.Array.contains(champsEligibles, champ.cType)) {return true;} else {return false;}
                        });
                        champsReqF = Ext.Array.map(champsReqF, function(champ){
                            return ({nom:typesContenus[0]+ ' > '+champ.config.fieldLabel, valeur:{cType: champ.cType, name: champ.config.name, label: myThingType.get("type")+' > '+champ.config.fieldLabel}});
                        });

                        champsRegles = Ext.Array.merge(champsRegles, champsReqF);

                    }

                    var typesDEP = Ext.getStore('TCNDepCombo').findRecord('id',typesContenus[0]).data.dependantTypes;
                    var j = 1;
                    for (j=1; j<typesContenus.length; j++) {
                        var typesDEPSuivant = Ext.getStore('TCNDepCombo').findRecord('id',typesContenus[j]).data.dependantTypes;
                        typesDEP = Ext.Array.intersect(typesDEP, typesDEPSuivant);
                    }
                    var k=0;
                    for (k=0; k<typesDEP.length; k++) {

                        var theTargetType = Ext.getStore('TCDepForQA').findRecord('id',typesDEP[k]);
                        champsRegles.push({nom:theTargetType.get("type")+' > '+'Création',
                            valeur: {
                                cType: 'datefield',
                                name: 'creation',
                                label: theTargetType.get("type")+' > '+'Création'
                            }
                        });
                        champsRegles.push({nom:theTargetType.get("type")+' > '+'Dernière modification',
                            valeur: {
                                cType: 'datefield',
                                name: 'derniereModification',
                                label: theTargetType.get("type")+' > '+'Dernière modification'
                            }});  


                            var champsReq = Ext.clone(theTargetType.get("champs"));
                            var champsEligibles = ["Ext.form.field.Date", "Ext.form.field.Time", "Ext.form.field.Checkbox", "Ext.form.field.Number"];
                            var champsReqF = Ext.Array.filter(champsReq, function(champ){
                                if (Ext.Array.contains(champsEligibles, champ.cType)) {return true;} else {return false;}
                            });
                            champsReqF = Ext.Array.map(champsReqF, function(champ){
                                return ({nom:typesDEP[k]+ ' > '+champ.config.fieldLabel, valeur:{cType: champ.cType, name: champ.config.name, label:theTargetType.get("type")+' > '+champ.config.fieldLabel}});
                            });

                            champsRegles = Ext.Array.merge(champsRegles, champsReqF);




                        }

                        Ext.getStore('champsTCARStore').loadData(champsRegles);



                        var vocabulaires = Ext.getStore('TCNDepCombo').findRecord('id',typesContenus[0]).data.vocabularies;
                        var j = 1;
                        for (j=1; j<typesContenus.length; j++) {
                            var vocabSuivant = Ext.getStore('TCNDepCombo').findRecord('id',typesContenus[j]).data.vocabularies;
                            vocabulaires = Ext.Array.intersect(vocabulaires, vocabSuivant);
                        }

                        if (vocabulaires.length>1) {Ext.getCmp('assisstantRE2').add(lien);}

                        var k =0;
                        for (k=0; k<vocabulaires.length; k++) {
                            var leVocab = Ext.getStore('TaxonomyForQA').findRecord('id', vocabulaires[k]);
                            var vocabAPlat= [ ];
                            //this.miseAPlatTaxo(leVocab.data.termes.children, vocabAPlat);


                            var storeT = Ext.create('Ext.data.JsonStore', {
                                model:"Rubedo.model.taxonomyTermModel",
                                remoteFilter:"true",
                                proxy: {
                                    type: 'ajax',
                                    api: {
                                        read: 'taxonomy-terms'
                                    },
                                    reader: {
                                        type: 'json',
                                        messageProperty: 'message',
                                        root: 'data'
                                    },
                                    encodeFilters: function(filters) {
                                        var min = [],
                                        length = filters.length,
                                        i = 0;

                                        for (; i < length; i++) {
                                            min[i] = {
                                                property: filters[i].property,
                                                value   : filters[i].value
                                            };
                                            if (filters[i].type) {
                                                min[i].type = filters[i].type;
                                            }
                                            if (filters[i].operator) {
                                                min[i].operator = filters[i].operator;
                                            }
                                        }
                                        return this.applyEncoding(min);
                                    }
                                },
                                filters: {
                                    property: 'vocabularyId',
                                    value: leVocab.get("id")
                                }

                            });
                            storeT.on("beforeload", function(s,o){
                                o.filters=Ext.Array.slice(o.filters,0,1);
                                if (!Ext.isEmpty(o.params.comboQuery)){

                                    var newFilter=Ext.create('Ext.util.Filter', {
                                        property:"text",
                                        value:o.params.comboQuery,
                                        operator:'like'
                                    });

                                    o.filters.push(newFilter);

                                }


                            });


                            var selecteur = Ext.widget('comboboxselect', {
                                name:leVocab.get("id"),
                                anchor:"100%",
                                fieldLabel: leVocab.get("name"),
                                autoScroll: false,
                                store: storeT,
                                queryMode: 'remote',
                                queryParam: 'comboQuery',
                                minChars:3,
                                displayField: 'text',
                                valueField: 'id',
                                filterPickList: true,
                                typeAhead: true,
                                forceSelection: !leVocab.data.expandable,
                                createNewOnEnter: leVocab.data.expandable,
                                multiSelect: leVocab.data.multiSelect,
                                allowBlank: !leVocab.data.mandatory
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
                                name:leVocab.get("id")+"QueryRule",
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
                                title : leVocab.get("name"),
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
            var mainThing = Ext.widget(nRegle.cType, {flex:1, mame:nRegle.name});
            mainThing.name=nRegle.name;
            enrobage.getComponent(0).insert(1,mainThing);
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
                    name:nRegle.name+"Operator",
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

    onQueryBuildSaveBtnClick: function(button, e, options) {
        var mainWin= button.up().up();
        var result = { };
        Ext.Array.forEach(mainWin.query("field"),function(field){
            if (field.submitValue){
                result[field.name]=field.getValue();
            }
        });
        console.log(result);
    },

    init: function(application) {
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
            },
            "#queryBuildSaveBtn": {
                click: this.onQueryBuildSaveBtnClick
            }
        });
    }

});
