import { LitElement } from "lit";
/**
 * An example Off-road vans demo.
 *
 */
export declare class MyElement extends LitElement {
    attribute: {
        _demo: string;
        _alt: string;
    };
    render(): import("lit").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-element": MyElement;
    }
}
