import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An example Off-road vans demo.
 *
 */
@customElement("my-element")
export class MyElement extends LitElement {
  @property({ attribute: false })
  attribute = {
    _demo: "https://cdpn.io/elforjani/debug/rNZbgRo",
    _alt: "CSS Off-road vans demo",
  };

  render() {
    return html`
      <iframe
        title=${this.attribute._alt}
        class="iframe"
        loading="lazy"
        src=${this.attribute._demo}
      ></iframe>
    `;
  }

  static styles = css`
    :host {
      width: 100%;
      height: 100%;
    }
    iframe {
      width: 100%;
      height: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
