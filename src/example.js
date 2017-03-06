export default {
  name: 'app',

  data () {
    return {
      active: null,
      showTop: false, //alerts
      showRight: false, //alerts

      showLeft: false, //aside
      showRightA: false, //aside

      checked: false, //accordion

      checkboxValue: [], //button group
      radioValue: 'middle', //button group

      checkboxValueC: { //checkbox
        one: false,
        two: true,
        three: false,
        four: false
      },

		//datepicker
      clear: true,
      disabled: [],
      format: 'yyyy-MM-dd',
      formats: ['dd/MM/yyyy', 'dd-MM-yyyy', 'yyyy,MM,dd', 'yyyy-MM-dd', 'yyyy.MM.dd', 'MMM/dd/yyyy', 'MMMM/dd/yyyy', 'MM/dd/yyyy', 'MM-dd-yyyy'],
      placeholder: 'placeholder is displayed when value is null or empty',
      date: '2015-06-10',

	  activeF:0,
      valid: {user: false, directio: false}, //form validator

		// modals
      showModal: false,
      fadeModal: false,
      zoomModal: false,
      showCustomModal: false,
      largeModal: false,
      smallModal: false,

      input: null, //input

		// pophover
      placements: ['top', 'left', 'right', 'bottom'],
      text: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod',

		// progressive bar
      dynamicData: [10, 30, 50, 70, 90],
      stackedData: [10, 20, 30, 40],

      radioValue: null, // radio

      // selects
      select: {
        clearButton: false,
        closeOnSelect: false,
        disabled: false,
        justified: true,
        limit: false,
        multiple: [],
        options: [
          {val: 0, label: 'Cat'},
          {val: 1, label: 'Cow'},
          {val: 2, label: 'Dog'},
          {val: 3, label: 'Elephant'},
          {val: 4, label: 'Fish'},
          {val: 5, label: 'Lion'},
          {val: 6, label: 'Tiger'},
          {val: 7, label: 'Turtle'}
        ],
        placeholder: false,
        required: false,
        search: true
      },
      ajax: {
        options: [],
        value:null
      },
      single: [],

      // nav tabs
      justified: false,
      navStyle: 'tabs',

      // toogle button
      toogle: {
	      one: false,
	      two: true,
	      three: false,
	      input: false,
	      content: ''
      },

      // tooltip
      text: 'Lorem ipsum dolor sit amet',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod',

      // type ahed
      USstate: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
      asyncTemplate: '{{ item.formatted_address }}',
      githubTemplate: '<img width="18px" height="18px" :src="item.avatar_url"/> <span>{{item.login}}</span>'
    }
  },

  computed: {
    dateString () {
      let date
      if (this.date.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy')) {
        date = new Date(this.date.substring(6, 10), this.date.substring(3, 5), this.date.substring(0, 2))
      } else {
        date = new Date(this.date)
      }
      return isNaN(date.getFullYear()) ? new Date().toString() : date.toString()
    }
  },

  methods: {
    show (value) {
      return value instanceof Array ? value.join(', ') : value
    },

    ok () {
      return !confirm("Ok event.\nClose Modal?")
    },

    alert () {
      alert('Another Action.\nClose the modal...')
      this.showCustomModal = false
    },

    dynamicClick () {
      this.dynamicData = this.dynamicData.map(() => {
        return Math.floor(Math.random() * 100)
      })
    },

    stackedClick () {
      let i = 100
      this.stackedData = this.stackedData.map(() => {
        const random = Math.floor(Math.random() * i)
        i = i - random
        return random
      })
    },

    googleCallback (item) {
      return item.formatted_address
    },
    githubCallback (item) {
      window.open(item.html_url, '_blank')
      return item.login
    }
  
  },

  watch: {
    navStyle (val) {
      if (val === 'stacked') { this.justified = false }
    }
  }
}
