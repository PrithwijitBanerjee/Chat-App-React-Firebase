export const allSupportedFilesExtensions = [".jpg", ".jpeg", ".png"];

const acceptedFileTypes = ["image/jpg", "image/jpeg", "image/pjpeg", "image/png"];

export const isValidFile = file => {
            return acceptedFileTypes.includes(file.type);
}