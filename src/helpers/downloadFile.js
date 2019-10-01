// NOTE: only client side code - DA

export const downloadFile = (fileName, data) => {
    const aTag = document.createElement('a');
    aTag.setAttribute('href', data);
    aTag.setAttribute('target', '_blank');
    aTag.setAttribute('download', fileName);
    aTag.click();
}