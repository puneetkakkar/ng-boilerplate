import "./chunk-J4B6MK7R.js";

// node_modules/@angularclass/hmr/dist/helpers.js
function identity(val) {
  return val;
}
function bootloader(main, before, after) {
  if (typeof main === "object") {
    const _main = main.main;
    before = main.before;
    after = main.after;
    main = _main;
  }
  before = before || identity;
  after = after || identity;
  const readyState = document.readyState;
  function __domReadyHandler() {
    document.removeEventListener("DOMContentLoaded", __domReadyHandler);
    after(main(before(readyState)));
  }
  switch (readyState) {
    case "loading":
      document.addEventListener("DOMContentLoaded", __domReadyHandler);
      break;
    case "interactive":
    case "complete":
    default:
      after(main(before(readyState)));
  }
}
function createNewHosts(cmps) {
  const components = Array.prototype.map.call(cmps, function(componentNode) {
    const newNode = document.createElement(componentNode.tagName);
    const parentNode = componentNode.parentNode;
    const currentDisplay = newNode.style.display;
    newNode.style.display = "none";
    parentNode.insertBefore(newNode, componentNode);
    function removeOldHost() {
      newNode.style.display = currentDisplay;
      try {
        parentNode.removeChild(componentNode);
      } catch (e) {
      }
    }
    return removeOldHost;
  });
  return function removeOldHosts() {
    components.forEach((removeOldHost) => removeOldHost());
  };
}
function removeNgStyles() {
  const docHead = document.head;
  const _styles = docHead.querySelectorAll("style");
  const styles = Array.prototype.slice.call(_styles);
  styles.filter((style) => style.innerText.indexOf("_ng") !== -1).map((el) => docHead.removeChild(el));
}
function getInputValues() {
  const _inputs = document.querySelectorAll("input");
  const inputs = Array.prototype.slice.call(_inputs);
  return inputs.map((input) => input.value);
}
function setInputValues(_inputs) {
  const inputs = document.querySelectorAll("input");
  if (_inputs && inputs.length === _inputs.length) {
    _inputs.forEach((value, i) => {
      const el = inputs[i];
      el.value = value;
      el.dispatchEvent(new CustomEvent("input", { detail: el.value }));
    });
    _inputs.length = 0;
  }
}
function createInputTransfer() {
  const _inputs = getInputValues();
  return function restoreInputValues() {
    return setInputValues(_inputs);
  };
}

// node_modules/@angularclass/hmr/dist/experimental.js
function __getInputValues() {
  const _inputs = document.querySelectorAll("input, textarea, select");
  const inputs = Array.prototype.slice.call(_inputs);
  return inputs.map(function(input) {
    const inputTagName = input.tagName.toLowerCase();
    const inputType = input.type;
    const inputId = input.id && typeof input.id === "string" ? input.id : null;
    const inputName = input.name && typeof input.name === "string" ? input.name : null;
    const inputValue = input.value && typeof input.value === "string" ? input.value : null;
    const inputChildNodes = input.childNodes;
    const inputSelected = Boolean(input.selected);
    let elementStore = {
      "tag": inputTagName,
      "type": null,
      "id": inputId,
      "name": inputName,
      "value": "",
      "checked": false,
      "options": []
    };
    if ("input" === inputTagName || "textarea" === inputTagName) {
      elementStore["type"] = inputType;
      if ("input" !== inputTagName) {
        elementStore["value"] = inputValue;
        return elementStore;
      }
      switch (inputType) {
        case "checkbox":
        case "radio":
          elementStore["checked"] = inputSelected;
          elementStore["value"] = inputValue;
          return elementStore;
        case "image":
        case "button":
        case "submit":
        case "reset":
        default:
          return elementStore;
      }
    } else if ("select" === inputTagName) {
      const childNodes = Array.prototype.slice.call(inputChildNodes);
      const options = childNodes.map((option, i) => {
        return { value: option["value"], selected: Boolean(option["selected"]) };
      });
      elementStore["options"] = options;
      return elementStore;
    }
    return elementStore;
  });
}
function __setInputValues($inputs) {
  const inputs = document.querySelectorAll("input, textarea");
  $inputs.forEach((store, i) => {
    if ("input" === store.tag || "textarea" === store.tag) {
      if ("input" === store.tag && ("checkbox" === store.type || "radio" === store.type)) {
        let selector = "input" + (null !== store.id ? "#" + store.id : "") + '[type="' + store.type + '"]' + (null !== store.name ? '[name="' + store.name + '"]' : "") + '[value="' + store.value + '"]';
        let element = document.body.querySelector(selector);
        if (element && Boolean(store["checked"])) {
          element["checked"] = "checked";
          element.dispatchEvent(new CustomEvent("input", { detail: element["checked"] }));
        }
      } else if ("input" === store.tagName.toLowerCase() && ("image" === store.type || "button" === store.type || "submit" === store.type || "reset" === store.type)) {
      } else {
        if (null === store.id && null === store.name) {
          if (store.value.length && inputs[i] && inputs[i].tagName.toLowerCase() === store.tag && ("textarea" === store.tag || inputs[i].getAttribute("type") === store.type) && ("string" !== typeof inputs[i].id || !inputs[i].id.length) && ("string" !== typeof inputs[i].getAttribute("name") || !inputs[i].getAttribute("name").length)) {
            inputs[i]["value"] = store.value;
            inputs[i].dispatchEvent(new CustomEvent("input", { detail: inputs[i]["value"] }));
          }
        } else {
          let selector = "input" + (null !== store.id ? "#" + store.id : "") + ("input" === store.tag ? '[type="' + store.type + '"]' : "") + (null !== store.name ? '[name="' + store.name + '"]' : "");
          let element = document.body.querySelector(selector);
          if (element && store.value.length) {
            element["value"] = store.value;
            element.dispatchEvent(new CustomEvent("input", { detail: element["value"] }));
          }
        }
      }
    } else if ("select" === store.tag) {
      let select = null;
      if (null === store.id && null === store.name) {
        if (inputs[i] && inputs[i].tagName.toLowerCase() === store.tag && ("string" !== typeof inputs[i].id || !inputs[i].id.length) && ("string" !== typeof inputs[i].getAttribute("name") || !inputs[i].getAttribute("name").length)) {
          select = inputs[i];
        }
      } else {
        let selector = "select" + (null !== store.id ? "#" + store.id : "") + (null !== store.name ? '[name="' + store.name + '"]' : "");
        let element = document.body.querySelector(selector);
        if (element) {
          select = element;
        }
      }
      if (select) {
        store.options.forEach((storedOption, j) => {
          let option = select.querySelector('option[value="' + storedOption.value + '"]');
          if (!option && select.childNodes[j] && ("string" !== typeof select.childNodes[j]["value"] || !select.childNodes[j]["value"].length)) {
            option = select.childNodes[j];
          }
          if (option && !!storedOption.selected) {
            option["selected"] = "selected";
            option.dispatchEvent(new CustomEvent("input", { detail: option["selected"] }));
          }
        });
      }
    }
  });
}
function __createInputTransfer() {
  const $inputs = __getInputValues();
  return function restoreInputValues() {
    return __setInputValues($inputs);
  };
}

// node_modules/@angularclass/hmr/dist/hmr.js
var MODULE_CONFIG = {
  "OnInit": "hmrOnInit",
  "OnStatus": "hmrOnStatus",
  "OnCheck": "hmrOnCheck",
  "OnDecline": "hmrOnDecline",
  "OnDestroy": "hmrOnDestroy",
  "AfterDestroy": "hmrAfterDestroy"
};
function hmrModule(MODULE_REF, MODULE, CONFIG = MODULE_CONFIG) {
  if (MODULE["hot"]) {
    MODULE["hot"]["accept"]();
    if (MODULE_REF.instance[MODULE_CONFIG["OnInit"]]) {
      if (MODULE["hot"]["data"]) {
        MODULE_REF.instance[MODULE_CONFIG["OnInit"]](MODULE["hot"]["data"]);
      }
    }
    if (MODULE_REF.instance[MODULE_CONFIG["OnStatus"]]) {
      MODULE["hot"]["apply"](function hmrOnStatus(status) {
        MODULE_REF.instance[MODULE_CONFIG["OnStatus"]](status);
      });
    }
    if (MODULE_REF.instance[MODULE_CONFIG["OnCheck"]]) {
      MODULE["hot"]["check"](function hmrOnCheck(err, outdatedModules) {
        MODULE_REF.instance[MODULE_CONFIG["OnCheck"]](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance[MODULE_CONFIG["OnDecline"]]) {
      MODULE["hot"]["decline"](function hmrOnDecline(dependencies) {
        MODULE_REF.instance[MODULE_CONFIG["OnDecline"]](dependencies);
      });
    }
    MODULE["hot"]["dispose"](function hmrOnDestroy(store) {
      if (MODULE_REF.instance[MODULE_CONFIG["OnDestroy"]]) {
        MODULE_REF.instance[MODULE_CONFIG["OnDestroy"]](store);
      }
      MODULE_REF.destroy();
      if (MODULE_REF.instance[MODULE_CONFIG["AfterDestroy"]]) {
        MODULE_REF.instance[MODULE_CONFIG["AfterDestroy"]](store);
      }
    });
  }
  return MODULE_REF;
}
export {
  MODULE_CONFIG,
  __createInputTransfer,
  __getInputValues,
  __setInputValues,
  bootloader,
  createInputTransfer,
  createNewHosts,
  getInputValues,
  hmrModule,
  removeNgStyles,
  setInputValues
};
//# sourceMappingURL=@angularclass_hmr.js.map
