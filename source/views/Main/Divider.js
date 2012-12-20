
// The `Sample.Divider` kind
// ----------------------
// `Sample.Divider` is a control that allows the selection of an annotated
// source file from a drop-down menu. Selecting an option fires the
// `onSelect` event, as defined in `onyx.MenuItem`. Because we've set
// the `controller` property to `Sample.documents`, `onSelect` is
// dispatched and handled in `Sample.documents` (since we don't handle it
// locally). The same is true of events generated by tapping the
// `"Welcome"` button.
enyo.kind({
    name: "Sample.Divider",
    id: "divider",
    kind: "onyx.MoreToolbar",
    controller: "Sample.documents",
    components: [
        {kind: "onyx.Button", content: "Welcome"},
        {kind: "onyx.MenuDecorator", components: [
            {content: "Annotated Source"},
            {kind: "onyx.Menu", maxHeight: 245, components: [
                {content: "start.js"},
                {content: "PanelsController.js"},
                {content: "DocumentsController.js"},
                {content: "EditorController.js"},
                {content: "FitToTargetBoundsLayout.js"},
                {content: "RollerLayout.js"},
                {content: "RollerCollection.js"},
                {content: "RollerModel.js"},
                {content: "Scaffold.js"},
                {content: "Sample.js"},
                {content: "RootView.js"},
                {content: "Editor.js"},
                {content: "Toolbar.js"},
                {content: "Divider.js"},
                {content: "Main.js"},
                {content: "Documents.js"},
                {content: "Roller.js"},
                {content: "RollerPanel.js"}]}]}
    ]
});
