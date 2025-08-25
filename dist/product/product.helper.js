"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateDescription = truncateDescription;
function truncateDescription(description) {
    const words = description.trim().split(/\s+/);
    if (words.length <= 10) {
        return description;
    }
    const truncated = words.slice(0, 10).join(' ');
    return `${truncated}...`;
}
//# sourceMappingURL=product.helper.js.map