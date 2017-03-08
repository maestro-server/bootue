import accordion from './accordion/Accordion.vue'
import affix from './affix/Affix.vue'
import alert from './alert/Alert.vue'
import badge from './badges/Badges.vue'
import breadcrumps from './breadcrumps/Breadcrumps.vue'
import SpreadButtons from './buttons/'
import carousel from './carousel/Carousel.vue'
import bsCode from './code/Code.vue'
import dropdown from './dropdown/Dropdown.vue'
import SpreadForms from './forms/'

import modal from './modal/Modal.vue'
import navbar from './navbar/Navbar.vue'
import panel from './panel/Panel.vue'
import popover from './popover/Popover.vue'
import progressbar from './progressbar/Progressbar.vue'
import sidebar from './sidebar/Sidebar.vue'
import slider from './slider/Slider.vue'
import spinner from './spinner/Spinner.vue'
import tab from './tab/Tab.vue'
import tabGroup from './tabgroup/TabGroup.vue'
import tabs from './tabs/Tabs.vue'
import toggleButton from './togglebutton/ToggleButton.vue'
import tooltip from './tooltip/Tooltip.vue'
import typeahead from './typeahead/Typeahead.vue'

import pagination from './pagination/Pagination.vue'
import bslabel from './label/Label.vue'
import badges from './badges/Badges.vue'


export default {
  accordion,
  affix,
  alert,
  badge,
  breadcrumps,
  bsCode,
  carousel,
  dropdown,
  modal,
  navbar,
  panel,
  popover,
  progressbar,
  slider,
  sidebar,
  spinner,
  tab,
  tabGroup,
  tabs,
  toggleButton,
  tooltip,
  typeahead,
  bslabel,
  pagination,
  ...SpreadButtons,
  ...SpreadForms
}
