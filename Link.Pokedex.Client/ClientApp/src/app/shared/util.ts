export class Functions {

    public static getCurrentAbsoluteSiteUrl(): string {
        if (window
            && 'location' in window
            && 'protocol' in window.location
            && 'pathname' in window.location
            && 'host' in window.location) {
            return window.location.protocol + '//' + window.location.host + window.location.pathname;
        }
        return null;
    }

    public static getWebServerRelativeUrl(): string {
        if (window
            && 'location' in window
            && 'pathname' in window.location) {
            return window.location.pathname.replace(/\/$/, '');
        }
        return null;
    }

    public static getAbsoluteDomainUrl(): string {
        if (window
            && 'location' in window
            && 'protocol' in window.location
            && 'host' in window.location) {
            return window.location.protocol + '//' + window.location.host;
        }
        return null;
    }

    public static base64ToArrayBuffer(base64) {
        let binaryString = window.atob(base64);
        let binaryLen = binaryString.length;
        let bytes = new Uint8Array(binaryLen);
        for (let i = 0; i < binaryLen; i++) {
            let ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    }

    public static FileFromByteArray(fileName, contentType, byte) {
        // It is necessary to create a new blob object with mime-type explicitly set
        // otherwise only Chrome works like it should
        let newBlob = new Blob([byte], { type: contentType });

        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob);
            return;
        }

        // For other browsers:
        // Create a link pointing to the ObjectURL containing the blob.
        const data = window.URL.createObjectURL(newBlob);
        let link = document.createElement('a');
        link.href = data;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            // For Firefox it is necessary to delay revoking the ObjectURL
            window.URL.revokeObjectURL(data);
        });
    }

    public static round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    public static isValidDate(dia: number, mes: number, anio: number) {

        var day = Number(dia),
            month = Number(mes),
            year = Number(anio);

        var date = new Date();
        date.setFullYear(year, month - 1, day);
        // month - 1 since the month index is 0-based (0 = January)

        if ((date.getFullYear() == year) && (date.getMonth() == month + 1) && (date.getDate() == day))
            return true;

        return false;
    }
}
