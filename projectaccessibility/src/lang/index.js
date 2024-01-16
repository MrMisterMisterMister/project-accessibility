// Function that automatically loads in all the translations files
// This is to make it easier in handling the files
// Also you don't have to manually type it all in anymore
const TranslationLoader = () => {
    // Import all the JSON files in the translations dir
    // Eager is set to true, so it loads it in asap
    const modules = import.meta.glob("./**/*.json", {
        eager: true
    });

    // Initialize a translation object
    const translations = {};

    // Loop through each translation node
    for (const path in modules) {
        // Extract the language and namespace from the path
        const match = path.match(/\.\/(\w+)\/(\w+)\.json$/);

        // If the lang and namespace are found in the path
        if (match) {
            // Get the language and namespace from regex match
            const lang = match[1];
            const namespace = match[2];

            // Check if there is an object for the language
            // If there is none, create one
            if (!translations[lang]) {
                translations[lang] = {};
            }

            // Assign the default export of the module to translations
            translations[lang][namespace] = modules[path].default;
        }
    }

    // Return the translations
    return translations;
};

export default TranslationLoader;
