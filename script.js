function generateRecipe() {
    const topic = document.getElementById("topic").value;
    const wordCount = document.getElementById("wordCount").value;
    const spiceLevel = document.getElementById("spiceLevel").value;
    const allergies = document.getElementById("allergies").value;
    const cuisine = document.getElementById("cuisine").value;
    const skillLevel = document.getElementById("skillLevel").value;

    if (!topic || !wordCount) {
        alert("Please fill in both the Recipe Topic and Word Count.");
        return;
    }

    const recipeTemplate = `
        <strong>Recipe: ${topic}</strong> <br>
        <strong>Word Count:</strong> ${wordCount} words <br>
        <strong>Spice Level:</strong> ${spiceLevel} <br>
        <strong>Cuisine:</strong> ${cuisine} <br>
        <strong>Skill Level:</strong> ${skillLevel} <br>
        <strong>Avoid Allergens:</strong> ${allergies || "None"} <br><br>
        
        <strong>Ingredients:</strong> <br>
        - 2 cups of flour <br>
        - 1 tbsp salt <br>
        - 1 tsp chili powder (adjust for spice level) <br>
        - 1 cup water <br>
        - 1 tbsp olive oil <br>
        
        <strong>Step-by-Step Cooking Guide:</strong> <br>
        1. Mix the dry ingredients. <br>
        2. Add water slowly while stirring. <br>
        3. Knead the dough for 5 minutes. <br>
        4. Let it rest for 10 minutes. <br>
        5. Shape into desired form and cook at 180°C for 20 minutes. <br><br>

        <strong>Programmer Joke:</strong> Why do programmers hate nature? Because it has too many bugs! 😂
    `;

    document.getElementById("recipeText").innerHTML = recipeTemplate;
    document.getElementById("result").style.display = "block";
}
