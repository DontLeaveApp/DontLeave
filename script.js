function menudisp(shown) {
    let buttonAttrHidden = `menudisp(0);`
    let buttonAttrShown = `menudisp(1);`
    if (shown == 0) {
        // Menu content
        document.getElementById("navCont").innerHTML = `<h1>Navigation Menu</h1>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://github.com/orangetreefrog4/DontLeave/">GitHub</a></li>
            <li><a href="https://github.com/orangetreefrog4/DontLeave/issues">Bugs</a></li>
        </ul>`;
        document.getElementById("navButton").setAttribute("onclick", `menudisp(1, '${dirNum}')`);
    }
    if (shown == 1) {
        document.getElementById("navCont").innerHTML = '';
        document.getElementById("navButton").setAttribute("onclick", `menudisp(0, '${dirNum}')`);
    }
}

// Part of Hack Club Spaces, doesn't look too important, but might be a trigger for something else. Thought better not to touch.
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
});