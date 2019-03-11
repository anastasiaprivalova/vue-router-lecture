const hexString = (buffer) =>
    [...(new Uint8Array(buffer))]
        .map(value => {
            const hexCode = value.toString(16);
            return hexCode.padStart(2, '0');
        })
        .join('')

const digestMessage = (message, algorithm) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    return window.crypto.subtle.digest(algorithm, data);
}

export {
    hexString,
    digestMessage
}