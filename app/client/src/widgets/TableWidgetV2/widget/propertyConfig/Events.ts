import { TableWidgetProps } from "widgets/TableWidgetV2/constants";

export default {
  sectionName: "Events",
  children: [
    {
      helpText: "Triggers an action when a table row is selected",
      propertyName: "onRowSelected",
      label: "onRowSelected",
      controlType: "ACTION_SELECTOR",
      isJSConvertible: true,
      isBindProperty: true,
      isTriggerProperty: true,
    },
    {
      helpText: "Triggers an action when a table page is changed",
      propertyName: "onPageChange",
      label: "onPageChange",
      controlType: "ACTION_SELECTOR",
      isJSConvertible: true,
      isBindProperty: true,
      isTriggerProperty: true,
    },
    {
      helpText: "Triggers an action when a table page size is changed",
      propertyName: "onPageSizeChange",
      label: "onPageSizeChange",
      controlType: "ACTION_SELECTOR",
      isJSConvertible: true,
      isBindProperty: true,
      isTriggerProperty: true,
    },
    {
      propertyName: "onSearchTextChanged",
      label: "onSearchTextChanged",
      controlType: "ACTION_SELECTOR",
      isJSConvertible: true,
      isBindProperty: true,
      isTriggerProperty: true,
    },
    {
      helpText: "Triggers an action when a table column is sorted",
      propertyName: "onSort",
      label: "onSort",
      controlType: "ACTION_SELECTOR",
      isJSConvertible: true,
      isBindProperty: true,
      isTriggerProperty: true,
    },
    {
      helpText: "Triggers an action when bulk save button is clicked",
      propertyName: "onBulkSave",
      label: "onBulkSave",
      controlType: "ACTION_SELECTOR",
      isJSConvertible: true,
      isBindProperty: true,
      isTriggerProperty: true,
      hidden: (props: TableWidgetProps) => !props.allowBulkEditActions,
      dependencies: ["allowBulkEditActions"],
    },
    {
      helpText: "Triggers an action when bulk discard button is clicked",
      propertyName: "onBulkDiscard",
      label: "onBulkDiscard",
      controlType: "ACTION_SELECTOR",
      isJSConvertible: true,
      isBindProperty: true,
      isTriggerProperty: true,
      hidden: (props: TableWidgetProps) => !props.allowBulkEditActions,
      dependencies: ["allowBulkEditActions"],
    },
  ],
};