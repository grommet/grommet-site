import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { structure, nameToPath } from '../../structure';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Section from './Section';

import {
  AccordionItem,
  AnchorItem,
  AvatarItem,
  AnnounceContextItem,
  BoxItem,
  ButtonItem,
  CalendarItem,
  CardItem,
  CarouselItem,
  ChartItem,
  CheckBoxItem,
  CheckBoxGroupItem,
  ClockItem,
  CollapsibleItem,
  DataItem,
  DataChartItem,
  DataFilterItem,
  DataFiltersItem,
  DataSearchItem,
  DataSortItem,
  DataSummaryItem,
  DataTableItem,
  DataTableColumnsItem,
  DataViewItem,
  DateInputItem,
  DiagramItem,
  DistributionItem,
  DropItem,
  DropButtonItem,
  FileInputItem,
  FooterItem,
  FormItem,
  FormFieldItem,
  GridItem,
  GrommetItem,
  HeaderItem,
  HeadingItem,
  ImageItem,
  InfiniteScrollItem,
  KeyboardItem,
  LayerItem,
  ListItem,
  MainItem,
  MarkdownItem,
  MaskedInputItem,
  MenuItem,
  MeterItem,
  NameValueListItem,
  NavItem,
  NotificationItem,
  PageItem,
  PageHeaderItem,
  PaginationItem,
  ParagraphItem,
  RadioButtonItem,
  RadioButtonGroupItem,
  RangeInputItem,
  RangeSelectorItem,
  ResponsiveContextItem,
  SelectItem,
  SelectMultipleItem,
  SidebarItem,
  SkeletonItem,
  SkipLinksItem,
  SpinnerItem,
  StackItem,
  StarRatingItem,
  TableItem,
  TabsItem,
  TagItem,
  TextItem,
  TextAreaItem,
  TextInputItem,
  ThemeContextItem,
  ThumbsRatingItem,
  TipItem,
  VideoItem,
  WorldMapItem,
} from './items';

const Items = {
  Accordion: AccordionItem,
  Anchor: AnchorItem,
  Avatar: AvatarItem,
  AnnounceContext: AnnounceContextItem,
  Box: BoxItem,
  Button: ButtonItem,
  Calendar: CalendarItem,
  Card: CardItem,
  Carousel: CarouselItem,
  Chart: ChartItem,
  CheckBox: CheckBoxItem,
  CheckBoxGroup: CheckBoxGroupItem,
  Clock: ClockItem,
  Collapsible: CollapsibleItem,
  Data: DataItem,
  DataChart: DataChartItem,
  DataFilter: DataFilterItem,
  DataFilters: DataFiltersItem,
  DataSearch: DataSearchItem,
  DataSort: DataSortItem,
  DataSummary: DataSummaryItem,
  DataTable: DataTableItem,
  DataTableColumns: DataTableColumnsItem,
  DataView: DataViewItem,
  DateInput: DateInputItem,
  Diagram: DiagramItem,
  Distribution: DistributionItem,
  Drop: DropItem,
  DropButton: DropButtonItem,
  FileInput: FileInputItem,
  Footer: FooterItem,
  Form: FormItem,
  FormField: FormFieldItem,
  Grid: GridItem,
  Grommet: GrommetItem,
  Header: HeaderItem,
  Heading: HeadingItem,
  Image: ImageItem,
  InfiniteScroll: InfiniteScrollItem,
  Keyboard: KeyboardItem,
  Layer: LayerItem,
  List: ListItem,
  Main: MainItem,
  Markdown: MarkdownItem,
  MaskedInput: MaskedInputItem,
  Menu: MenuItem,
  Meter: MeterItem,
  NameValueList: NameValueListItem,
  Nav: NavItem,
  Notification: NotificationItem,
  Page: PageItem,
  PageHeader: PageHeaderItem,
  Pagination: PaginationItem,
  Paragraph: ParagraphItem,
  RadioButton: RadioButtonItem,
  RadioButtonGroup: RadioButtonGroupItem,
  RangeInput: RangeInputItem,
  RangeSelector: RangeSelectorItem,
  ResponsiveContext: ResponsiveContextItem,
  Select: SelectItem,
  SelectMultiple: SelectMultipleItem,
  Sidebar: SidebarItem,
  Skeleton: SkeletonItem,
  SkipLinks: SkipLinksItem,
  Spinner: SpinnerItem,
  Stack: StackItem,
  StarRating: StarRatingItem,
  Table: TableItem,
  Tabs: TabsItem,
  Tag: TagItem,
  Text: TextItem,
  TextArea: TextAreaItem,
  TextInput: TextInputItem,
  ThemeContext: ThemeContextItem,
  ThumbsRating: ThumbsRatingItem,
  Tip: TipItem,
  Video: VideoItem,
  WorldMap: WorldMapItem,
};

export default class Components extends Component {
  sectionRefs = {};

  constructor() {
    super();
    structure.sections.forEach(({ name }) => {
      this.sectionRefs[name] = React.createRef();
    });
  }

  render() {
    const desc =
      'These are the building blocks of the grommet library, master them, and become a l33t.';
    return (
      <Page>
        <Helmet>
          <title>Components</title>
          <meta name="description" content={desc} />
        </Helmet>
        <Header label="Components" summary={desc} />

        {structure.sections
          .filter(({ name }) => name !== 'Color' && name !== 'Background')
          .map(({ name, components }, index) => (
            <Section
              ref={this.sectionRefs[name]}
              key={name}
              name={name}
              index={index}
            >
              {components.map((component) => {
                const Item = Items[component];
                return (
                  <Item
                    key={component}
                    name={component}
                    path={nameToPath(component)}
                  />
                );
              })}
            </Section>
          ))}
      </Page>
    );
  }
}
