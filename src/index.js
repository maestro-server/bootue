import './_core/Core.vue'
import './utilities/Utilities.vue'

import accordion from './accordion/Accordion.vue'
import affix from './affix/Affix.vue'
import alert from './alert/Alert.vue'
import badge from './badges/Badges.vue'
import breadcrumps from './breadcrumps/Breadcrumps.vue'
import carousel from './carousel/Carousel.vue'
import './close/Close.vue'
import bsCode from './code/Code.vue'
import bsLabel from './label/Label.vue'
import displayer from './displayer/Displayer.vue'
import dropdown from './dropdown/Dropdown.vue'
import './grid/Grid.vue'
import './jumbotron/Jumbotron.vue'
import lists from './lists/Lists.vue'
import './media/Media.vue'
import modal from './modal/Modal.vue'
import navbar from './navbar/Navbar.vue'
import pagination from './pagination/Pagination.vue'
import panel from './panel/Panel.vue'
import popover from './popover/Popover.vue'
import progressbar from './progressbar/Progressbar.vue'
import sidebar from './sidebar/Sidebar.vue'
import slider from './slider/Slider.vue'
import spinner from './spinner/Spinner.vue'
import './structure/Structure.vue'
import tab from './tab/Tab.vue'
import tabGroup from './tabgroup/TabGroup.vue'
import tabs from './tabs/Tabs.vue'
import './thumbnail/Thumbnail.vue'
import toggleButton from './togglebutton/ToggleButton.vue'
import tooltip from './tooltip/Tooltip.vue'
import './typography/Type.vue'
import './typography/font-awesome/FontAwesome.vue'
import './typography/font-maestro/FontMaestro.vue'
import well from './wells/Wells.vue'

import SpreadTables from './tables/'
import SpreadButtons from './buttons/'
import SpreadForms from './forms/'

let components = {
  accordion,
  affix,
  alert,
  badge,
  breadcrumps,
  bsCode,
  bsLabel,
  carousel,
  displayer,
  dropdown,
  lists,
  modal,
  navbar,
  pagination,
  panel,
  popover,
  progressbar,
  sidebar,
  slider,
  spinner,
  tab,
  tabGroup,
  tabs,
  toggleButton,
  tooltip,
  well
}

components = Object.assign(components, SpreadButtons, SpreadForms, SpreadTables)

export default components
