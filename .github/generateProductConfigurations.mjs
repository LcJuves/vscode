/**
 * Created at 2021/8/7 20:58
 *
 * @author Liangcheng Juves
 */

// @ts-check

import * as fs from 'node:fs';
import * as path from 'node:path';
import * as process from 'node:process';

const productJsonFileName = "product.json";
import productJson from '../product.json' with { type: 'json' };
// @ts-ignore
import vsProductJson from '../vs-product.json' with { type: 'json' };
import packageJson from '../package.json' with { type: 'json' };

function generateProductJson() {
	// @ts-ignore
	const _replaceName = (/** @type {string} */ name) => name.replace(/-[ ]*/, "");

	productJson["nameShort"] = _replaceName(productJson["nameShort"]).replace(" ", "");
	productJson["nameLong"] = _replaceName(productJson["nameLong"]);
	productJson["applicationName"] = _replaceName(productJson["applicationName"]);
	productJson["tunnelApplicationName"] = `${productJson["applicationName"]}-tunnel`;
	// @ts-ignore
	productJson["tunnelApplicationConfig"] = vsProductJson["tunnelApplicationConfig"];

	productJson["win32MutexName"] = productJson["applicationName"];
	productJson["win32TunnelServiceMutex"] = `${productJson["applicationName"]}-tunnelservice`;
	productJson["win32TunnelMutex"] = productJson["tunnelApplicationName"];
	productJson["win32DirName"] = vsProductJson["win32DirName"];
	// @ts-ignore
	productJson["win32AppId"] = vsProductJson["win32AppId"];
	productJson["win32x64AppId"] = vsProductJson["win32x64AppId"];
	productJson["win32arm64AppId"] = vsProductJson["win32arm64AppId"];
	// @ts-ignore
	productJson["win32UserAppId"] = vsProductJson["win32UserAppId"];
	productJson["win32x64UserAppId"] = vsProductJson["win32x64UserAppId"];
	productJson["win32arm64UserAppId"] = vsProductJson["win32arm64UserAppId"];
	productJson["win32ShellNameShort"] = _replaceName(productJson["win32ShellNameShort"])
		.replace(" ", "");

	productJson["darwinBundleIdentifier"] = vsProductJson["darwinBundleIdentifier"];
	// @ts-ignore
	productJson["darwinExecutable"] = "CodeOSS";
	productJson["dataFolderName"] = `.${productJson["applicationName"]}`;
	productJson["urlProtocol"] = "vscode";
	// @ts-ignore
	productJson["version"] = packageJson["version"];
	productJson["serverApplicationName"] = `${productJson["applicationName"]}-server`;
	productJson["serverDataFolderName"] = `${productJson["dataFolderName"]}-server`;
	productJson["licenseUrl"] = 'https://github.com/LcJuves/vscode/blob/real-time-synchronization/LICENSE.txt';
	productJson["serverLicenseUrl"] = productJson["licenseUrl"];
	productJson["serverLicense"] = [
		// @ts-ignore
		"*",
		// @ts-ignore
		`* ${productJson["nameLong"]} Server`,
		// @ts-ignore
		"*",
		// @ts-ignore
		"* By using the software, you agree to",
		// @ts-ignore
		`* the ${productJson["nameLong"]} Server License Terms (${productJson["serverLicenseUrl"]}).`,
		// @ts-ignore
		"*"
	];
	productJson["serverLicensePrompt"] = vsProductJson["serverLicensePrompt"];
	// @ts-ignore
	productJson["quality"] = vsProductJson["quality"];
	productJson["linuxIconName"] = productJson["applicationName"];
	// @ts-ignore
	productJson["extensionsGallery"] = vsProductJson["extensionsGallery"];
	// @ts-ignore
	productJson["profileTemplatesUrl"] = vsProductJson["profileTemplatesUrl"];
	// @ts-ignore
	productJson["extensionProperties"] = vsProductJson["extensionProperties"];
	// @ts-ignore
	productJson["extensionRecommendations"] = vsProductJson["extensionRecommendations"];
	// @ts-ignore
	productJson["extensionsEnabledWithApiProposalVersion"] = vsProductJson["extensionsEnabledWithApiProposalVersion"];
	// @ts-ignore
	productJson["keymapExtensionTips"] = vsProductJson["keymapExtensionTips"];
	// @ts-ignore
	productJson["languageExtensionTips"] = vsProductJson["languageExtensionTips"];
	// @ts-ignore
	productJson["commonlyUsedSettings"] = vsProductJson["commonlyUsedSettings"];
	// @ts-ignore
	productJson["configBasedExtensionTips"] = vsProductJson["configBasedExtensionTips"];
	// @ts-ignore
	productJson["exeBasedExtensionTips"] = vsProductJson["exeBasedExtensionTips"];
	// @ts-ignore
	productJson["webExtensionTips"] = vsProductJson["webExtensionTips"];
	// @ts-ignore
	productJson["virtualWorkspaceExtensionTips"] = vsProductJson["virtualWorkspaceExtensionTips"];
	// @ts-ignore
	productJson["remoteDefaultExtensionsIfInstalledLocally"] = vsProductJson["remoteDefaultExtensionsIfInstalledLocally"];
	// @ts-ignore
	productJson["remoteExtensionTips"] = vsProductJson["remoteExtensionTips"];
	// @ts-ignore
	productJson["checksumFailMoreInfoUrl"] = vsProductJson["checksumFailMoreInfoUrl"];
	// @ts-ignore
	productJson["commandPaletteSuggestedCommandIds"] = vsProductJson["commandPaletteSuggestedCommandIds"];
	// @ts-ignore
	productJson["extensionKeywords"] = vsProductJson["extensionKeywords"];

	// @ts-ignore
	productJson["extensionAllowedBadgeProviders"] =
		vsProductJson["extensionAllowedBadgeProviders"];
	// @ts-ignore
	productJson["extensionAllowedBadgeProvidersRegex"] =
		vsProductJson["extensionAllowedBadgeProvidersRegex"];
	// @ts-ignore
	productJson["crashReporter"] = vsProductJson["crashReporter"];
	// @ts-ignore
	productJson["appCenter"] = vsProductJson["appCenter"];
	// @ts-ignore
	productJson["enableTelemetry"] = false;
	// @ts-ignore
	productJson["aiConfig"] = vsProductJson["aiConfig"];
	// @ts-ignore
	productJson["aiGeneratedWorkspaceTrust"] = vsProductJson["aiGeneratedWorkspaceTrust"];
	// @ts-ignore
	productJson["msftInternalDomains"] = vsProductJson["msftInternalDomains"];
	// @ts-ignore
	productJson["documentationUrl"] = vsProductJson["documentationUrl"];
	// @ts-ignore
	productJson["serverDocumentationUrl"] = vsProductJson["serverDocumentationUrl"];
	// @ts-ignore
	productJson["settingsSearchUrl"] = vsProductJson["settingsSearchUrl"];

	// @ts-ignore
	productJson["extensionConfigurationPolicy"] = vsProductJson["extensionConfigurationPolicy"];
	// @ts-ignore
	productJson["extensionEnabledApiProposals"] = vsProductJson["extensionEnabledApiProposals"];
	// @ts-ignore
	productJson["extensionKind"] = vsProductJson["extensionKind"];
	// @ts-ignore
	productJson["extensionPointExtensionKind"] =
		vsProductJson["extensionPointExtensionKind"];
	// @ts-ignore
	productJson["extensionSyncedKeys"] = vsProductJson["extensionSyncedKeys"];
	// @ts-ignore
	productJson["extensionVirtualWorkspacesSupport"] =
		vsProductJson["extensionVirtualWorkspacesSupport"];
	// @ts-ignore
	productJson["inheritAuthAccountPreference"] =
		vsProductJson["inheritAuthAccountPreference"];

	// @ts-ignore
	productJson["linkProtectionTrustedDomains"] =
		vsProductJson["linkProtectionTrustedDomains"];
	productJson["trustedExtensionAuthAccess"] =
		vsProductJson["trustedExtensionAuthAccess"];
	// @ts-ignore
	productJson["auth"] = vsProductJson["auth"];
	// @ts-ignore
	productJson["authClientIdMetadataUrl"] = vsProductJson["authClientIdMetadataUrl"];
	// @ts-ignore
	productJson["configurationSync.store"] = vsProductJson["configurationSync.store"];
	// @ts-ignore
	productJson["editSessions.store"] = vsProductJson["editSessions.store"];
	productJson["builtInExtensions"] = vsProductJson["builtInExtensions"];
	// @ts-ignore
	productJson["chatParticipantRegistry"] = vsProductJson["chatParticipantRegistry"];
	// @ts-ignore
	productJson["chatSessionRecommendations"] = vsProductJson["chatSessionRecommendations"];
	// @ts-ignore
	productJson["defaultAccount"] = vsProductJson["defaultAccount"];
	// @ts-ignore
	productJson["defaultChatAgent"] = vsProductJson["defaultChatAgent"];
	// @ts-ignore
	productJson["mcpGallery"] = vsProductJson["mcpGallery"];

	const writeStream = fs.createWriteStream(productJsonFileName);
	writeStream.write(JSON.stringify(productJson));
	writeStream.end();

	console.log(`Generate "${productJsonFileName}" successfully!`);
}

function generateWin32VisualElementsManifest() {
	const outputFileName = "VisualElementsManifest.xml";
	const visualElementsManifestXmlPath = path.join(
		process.cwd(),
		"resources",
		"win32",
		outputFileName,
	);

	const xml = fs.readFileSync(visualElementsManifestXmlPath).toString();
	fs.writeFileSync(
		visualElementsManifestXmlPath,
		xml.replace(/@@NAME_SHORT@@/g, productJson["nameShort"]),
	);

	console.log(`Generate "${outputFileName}" successfully!`);
}

function generateServerWebManifest() {
	const outputFileName = "manifest.json";
	const manifestJsonPath = path.join(
		process.cwd(),
		"resources",
		"server",
		outputFileName,
	);

	const manifest = JSON.parse(fs.readFileSync(manifestJsonPath).toString());
	manifest["name"] = productJson["nameLong"];
	manifest["short_name"] = productJson["nameShort"];
	fs.writeFileSync(
		manifestJsonPath,
		JSON.stringify(manifest),
	);

	console.log(`Generate "${outputFileName}" successfully!`);
}

function generateAppImageYAML() {
	const outputFileName = "AppImage.yml";
	const ymlPath = path.join(
		process.cwd(),
		"resources",
		"linux",
		outputFileName,
	);

	const yml = fs.readFileSync(ymlPath).toString();
	fs.writeFileSync(
		ymlPath,
		yml.replace(/@@NAME_SHORT@@/g, productJson["nameShort"]).replace(
			/@@NAME@@/g,
			productJson["applicationName"],
		).replace(/@@ICON@@/g, productJson["linuxIconName"]),
	);

	console.log(`Generate "${outputFileName}" successfully!`);
}

function generateProductConfigurations() {
	generateProductJson();
	generateWin32VisualElementsManifest();
	generateServerWebManifest();
	generateAppImageYAML();
}

generateProductConfigurations();
