const {createApp} = Vue;

createApp ({
  data(){
    return{
      isActive:'',
      contacts:[
        {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          lastAccess : 'oggi alle 12:00',
          messages:[
            {
              date:'03/11/2022',
              hour: '12:40',
              message:'Ciao Michele come stai?',
              status:'sent'
            },
            {
              date:'03/11/2022',
              hour: '12:41',
              message:'Ti saluta Chiara, è qui con me',
              status:'sent'
            },
            {
              date:'03/11/2022',
              hour: '12:43',
              message:'Ciao, tutto bene. Ricambia',
              status:'received'
            },
          ]
        },
        {
          name: 'Gianluca',
          avatar: '_2',
          visible: false,
          lastAccess : 'oggi alle 16:00',
          messages:[
            {
              date:'04/11/2022',
              hour: '11:20',
              message:'Ciao tutto bene?',
              status:'received'
            },
            {
              date:'04/11/2022',
              hour: '11:20',
              message:'Hai già finito il progetto in Vuejs?',
              status:'received'
            },
            {
              date:'04/11/2022',
              hour: '11:53',
              message:'Ciao, no non ancora',
              status:'sent'
            }
          ]
        },
        {
          name: 'Alessandro VET',
          avatar: '_3',
          visible: false,
          lastAccess : 'ieri alle 11:00',
          messages:[
            {
              date:'04/11/2022',
              hour:'15:20',
              message:'Alessandro sei riuscito a visitare Paco?',
              status:'sent'
            },
            {
              date:'04/11/2022',
              hour: '15:30',
              message:'Ciao Sofia, sì l\'ho visitato e ora sta meglio',
              status:'received'
            },
            {
              date:'04/11/2022',
              hour: '15:33',
              message:'Meno male, tra poco passo a prenderlo!',
              status:'sent'
            }
          ]
        },
        {
          name: 'Francesco',
          avatar: '_4',
          visible: false,
          lastAccess : 'oggi alle 17:00',
          messages:[
            {
              date:'05/11/2022',
              hour: '13:20',
              message:'Ciao Sofia come stai?',
              status:'received'
            },
            {
              date:'05/11/2022',
              hour: '13:23',
              message:'Come sta Paco?',
              status:'received'
            },
            {
              date:'05/11/2022',
              hour: '13:56',
              message:'Ciao, fortunatamente meglio, grazie',
              status:'sent'
            }
          ]
        },
        {
          name: 'Luigi Meccanico',
          avatar: '_5',
          visible: false,
          lastAccess : 'ieri alle 08:00',
          messages:[
            {
              date:'05/11/2022',
              hour: '16:20',
              message:'Ciao Luigi, la macchina è pronta?',
              status:'sent'
            },
            {
              date:'05/11/2022',
              hour: '17:00',
              message:'Ciao, sì ho finito',
              status:'received'
            }
          ]
        },
        {
          name: 'Serena',
          avatar: '_6',
          visible: false,
          lastAccess : 'oggi alle 09:18',
          messages:[
            {
              date:'06/11/2022',
              hour: '16:20',
              message:'Ciao, ci troviamo per una bevuta stasera verso le 19?',
              status:'sent'
            },
            {
              date:'06/11/2022',
              hour: '17:45',
              message:'Ciao, sì certo. Ci troviamo allo Zibaldone?',
              status:'received'
            },
            {
              date:'06/11/2022',
              hour: '18:10',
              message:'Perfetto! A tra poco!',
              status:'sent'
            },
          ]
        },
        {
          name: 'Samuele',
          avatar: '_7',
          visible: false,
          lastAccess : 'domenica alle 20:12',
          messages:[
            {
              date:'06/11/2022',
              hour: '19:40',
              message:'Ciao Samu ci sei per un aperitivo stasera?',
              status:'sent'
            },
            {
              date:'06/11/2022',
              hour: '17:40',
              message:'Siamo io e Serena',
              status:'sent'
            },
            {
              date:'06/11/2022',
              hour: '18:30',
              message:'Non riesco stasera!',
              status:'received'
            },
          ]
        },
        {
          name: 'Lino',
          avatar: '_8',
          visible: false,
          lastAccess : 'oggi alle 15:46',
          messages:[
            {
              date:'07/11/2022',
              hour: '14:40',
              message:'Ciao Lino',
              status:'sent'
            },
            {
              date:'07/11/2022',
              hour: '14:42',
              message:'Cosa ne dici dell\'esercizio di oggi?',
              status:'sent'
            },
            {
              date:'07/11/2022',
              hour: '14:49',
              message:'Non so da dove iniziare!',
              status:'received'
            },
          ]
        },
      ]
    }
  },
  methods:{
    activeChat(index){
      this.isActive='';
      this.contacts.forEach(contact => {
       contact.visible = false;
      });
      this.isActive=this.contacts[index];
      this.contacts[index].visible = true;
    }
  }
}).mount('#app')