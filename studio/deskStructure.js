import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About")
        .child(S.document().schemaType("about").documentId("about")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !["about"].includes(listItem.getId())
      ),
    ]);
