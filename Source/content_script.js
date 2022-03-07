const domainExclusions = ["office.com", "service-now.com"]
var currentDomain = window.location.hostname.toString();
currentRootDomain = currentDomain.substring(currentDomain.lastIndexOf(".", currentDomain.lastIndexOf(".") - 1) + 1);

console.log(currentDomain);
console.log(currentRootDomain);
if (domainExclusions.includes(currentRootDomain) == false){
	walk(document.body);
}

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bCrowdstrike\b/g, "Clownstrike");
	v = v.replace(/\bCrowdStrike\b/g, "ClownStrike");
	v = v.replace(/\bcrowdstrike\b/g, "clownstrike");
	
	v = v.replace(/\Carbon Black\b/g, "Carbon Blonk");
	v = v.replace(/\carbon black\b/g, "carbon blonk");
	v = v.replace(/\Carbon black\b/g, "Carbon blonk");
	v = v.replace(/\carbon Black\b/g, "carbon Blonk");

	v = v.replace(/\bSentinelOne\b/g, "SensualOne");
	v = v.replace(/\bSentinelone\b/g, "Sensualone");
	v = v.replace(/\bsentinelone\b/g, "sensualone");

	textNode.nodeValue = v;
}


