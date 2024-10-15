/*	
	this: [button text="View Live Site" url="https://alignco.us/" new_tab="true" style="default"]
	becomes this (but without php etc):
	<div class='button-wrapper'>
		<a class="button version-accent" href="<?php print $atts['link']; ?>" target="<?php print $atts['target']; ?>" rel="noopener"><?php print $atts['text']; ?></a>
	</div>
	(similar to wordpress shortcodes)
*/
export default function do_shortcode(content) {
    // Define the regular expression pattern
    const pattern =
        /\[button text="(.+?)" url="(.+?)" new_tab="(.+?)" style="(.+?)"\]/g;

    // Replace the pattern with the desired HTML output
    return content.replace(pattern, (match, text, url, newTab, style) => {
        const target = newTab === "true" ? "_blank" : "_self";
        return `
			<div class='button-wrapper'>
				<a class="button version-${style}" href="${url}" target="${target}" rel="noopener">${text}</a>
			</div>
		`;
    });
}
