/**
 * A minimum standin for vscode.TextDocument that is passed to a `ParseEngine`.
 */
interface ISimpleTextDocument {
    languageId: string;
    getText(): string;
    baseName: string;
}

export default ISimpleTextDocument;
