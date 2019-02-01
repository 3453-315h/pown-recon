exports["archiveIndex"] = {
    "alias": [
        "archive_index",
        "arci"
    ],
    "title": "Archive.org Index",
    "description": "Obtain a commoncraw index for specific URL.",
    "types": [
        "*"
    ],
    "options": {}
}

exports["archiveIndex"].load = function () { return require("./archive")["archiveIndex"] }

exports["awsIamEndpoints"] = {
    "alias": [
        "aws_iam_endpoints",
        "awsie"
    ],
    "title": "AWS Endpoints",
    "description": "Enumeration AWS IAM Endpoints",
    "types": [
        "*"
    ],
    "options": {}
}

exports["awsIamEndpoints"].load = function () { return require("./aws")["awsIamEndpoints"] }

exports["builtwithScrapeRelationships"] = {
    "alias": [
        "builtwith_scrape_relationships",
        "bwsr"
    ],
    "title": "Scrape Builtwith Relationships",
    "description": "Performs scrape of builtwith relationships",
    "types": [
        "*"
    ],
    "options": {}
}

exports["builtwithScrapeRelationships"].load = function () { return require("./builtwith")["builtwithScrapeRelationships"] }

exports["cloudflareDnsQuery"] = {
    "alias": [
        "cloudflare_dns_query",
        "cfdq"
    ],
    "title": "CloudFlare DNS Query",
    "description": "Query CloudFlare DNS API",
    "types": [
        "*"
    ],
    "options": {
        "type": {
            "description": "Record type",
            "type": "string",
            "default": "A"
        }
    }
}

exports["cloudflareDnsQuery"].load = function () { return require("./cloudflare")["cloudflareDnsQuery"] }

exports["commoncrawlIndex"] = {
    "alias": [
        "commoncrawl_index",
        "cci"
    ],
    "title": "Commoncrawl Index",
    "description": "Obtain a commoncraw index for specific URL.",
    "types": [
        "*"
    ],
    "options": {}
}

exports["commoncrawlIndex"].load = function () { return require("./commoncrawl")["commoncrawlIndex"] }

exports["crtshDomainReport"] = {
    "alias": [
        "crtsh_domain_report",
        "crtshdr"
    ],
    "title": "CRT.SH Domain Report",
    "description": "Obtain crt.sh domain report which helps enumerating potential target subdomains.",
    "types": [
        "*"
    ],
    "options": {}
}

exports["crtshDomainReport"].load = function () { return require("./crtsh")["crtshDomainReport"] }

exports["dockerhubListRepos"] = {
    "alias": [
        "dockerhub_list_repos",
        "dhlr"
    ],
    "title": "List DockerHub Repos",
    "description": "List the first 100 DockerHub repositories",
    "types": [
        "*"
    ],
    "options": {}
}

exports["dockerhubListRepos"].load = function () { return require("./dockerhub")["dockerhubListRepos"] }

exports["githubListRepos"] = {
    "alias": [
        "github_list_repos",
        "ghlr"
    ],
    "title": "List GitHub Repos",
    "description": "List the first 100 GitHub repositories",
    "types": [
        "*"
    ],
    "options": {
        "type": {
            "description": "Repository type",
            "type": "string",
            "default": "owner"
        }
    }
}

exports["githubListRepos"].load = function () { return require("./github")["githubListRepos"] }

exports["githubListMembers"] = {
    "alias": [
        "github_list_members",
        "ghlm"
    ],
    "title": "List GitHub Members",
    "description": "List the first 100 GitHub members in org",
    "types": [
        "*"
    ],
    "options": {}
}

exports["githubListMembers"].load = function () { return require("./github")["githubListMembers"] }

exports["gravatar"] = {
    "alias": [],
    "title": "Gravatar",
    "description": "Get gravatar",
    "types": [
        "*"
    ],
    "options": {}
}

exports["gravatar"].load = function () { return require("./gravatar")["gravatar"] }

exports["hackertargetReverseIpLookup"] = {
    "alias": [
        "hackertarget_reverse_ip_lookup",
        "htril"
    ],
    "title": "HackerTarget Reverse IP Lookup",
    "description": "Obtain reverse IP information from hackertarget.com.",
    "types": [
        "*"
    ],
    "options": {}
}

exports["hackertargetReverseIpLookup"].load = function () { return require("./hackertarget")["hackertargetReverseIpLookup"] }

exports["hibpReport"] = {
    "alias": [
        "hibp_report",
        "hibpr"
    ],
    "title": "HIBP Report",
    "description": "Obtain haveibeenpwned.com breach report.",
    "types": [
        "*"
    ],
    "options": {}
}

exports["hibpReport"].load = function () { return require("./hibp")["hibpReport"] }

exports["pksLookupKeys"] = {
    "alias": [
        "pks_lookup_keys",
        "pkslk"
    ],
    "title": "PKS Lookup",
    "description": "Look the the PKS database at pool.sks-keyservers.net which pgp.mit.edu is part of.",
    "types": [
        "*"
    ],
    "options": {}
}

exports["pksLookupKeys"].load = function () { return require("./pks")["pksLookupKeys"] }

exports["riddlerIpSearch"] = {
    "alias": [
        "riddler_ip_search",
        "ris"
    ],
    "title": "Riddler IP Search",
    "description": "Searches for IP references using F-Secure riddler.io.",
    "types": [
        "*"
    ],
    "options": {}
}

exports["riddlerIpSearch"].load = function () { return require("./riddler")["riddlerIpSearch"] }

exports["riddlerDomainSearch"] = {
    "alias": [
        "riddler_domain_search",
        "rds"
    ],
    "title": "Riddler Domain Search",
    "description": "Searches for Domain references using F-Secure riddler.io.",
    "types": [
        "*"
    ],
    "options": {}
}

exports["riddlerDomainSearch"].load = function () { return require("./riddler")["riddlerDomainSearch"] }

exports["threatcrowdDomainReport"] = {
    "alias": [
        "threatcrowd_domain_report",
        "tcdr"
    ],
    "title": "Threatcrowd Domain Report",
    "description": "Obtain threatcrowd domain report which helps enumerating potential target subdomains and email addresses.",
    "types": [
        "*"
    ],
    "options": {}
}

exports["threatcrowdDomainReport"].load = function () { return require("./threatcrowd")["threatcrowdDomainReport"] }

exports["threatcrowdIpReport"] = {
    "alias": [
        "threatcrowd_ip_report",
        "tcir"
    ],
    "title": "Threatcrowd IP Report",
    "description": "Obtain threatcrowd ip report which helps enumerating virtual hosts.",
    "types": [
        "*"
    ],
    "options": {}
}

exports["threatcrowdIpReport"].load = function () { return require("./threatcrowd")["threatcrowdIpReport"] }

exports["urlscanLiveshot"] = {
    "alias": [
        "usls"
    ],
    "title": "Urlscan Liveshot",
    "description": "Generates a liveshot of any public site via urlscan.",
    "types": [
        "*"
    ],
    "options": {}
}

exports["urlscanLiveshot"].load = function () { return require("./urlscan")["urlscanLiveshot"] }

exports["nop"] = {
    "alias": [],
    "title": "No Op Transform",
    "description": "Does not do anything",
    "types": [
        "*"
    ],
    "options": {}
}

exports["nop"].load = function () { return require("./utils")["nop"] }

exports["echo"] = {
    "alias": [],
    "title": "Echo Transform",
    "description": "Echos Nodes",
    "types": [
        "*"
    ],
    "options": {}
}

exports["echo"].load = function () { return require("./utils")["echo"] }

exports["wappalyzerProfile"] = {
    "alias": [
        "wappalyzer_profile",
        "wzp"
    ],
    "title": "Wappalyzer Profile",
    "description": "Enumerate technologies with api.wappalyzer.com",
    "types": [
        "*"
    ],
    "options": {}
}

exports["wappalyzerProfile"].load = function () { return require("./wappalyzer")["wappalyzerProfile"] }

exports["whatsmynameReport"] = {
    "alias": [
        "whatsmyname_report",
        "whatsmyname",
        "wmnr",
        "wmn"
    ],
    "title": "Whatsmyname Report",
    "description": "Find social accounts with the help of whatsmyname database.",
    "types": [
        "*"
    ],
    "options": {}
}

exports["whatsmynameReport"].load = function () { return require("./whatsmyname")["whatsmynameReport"] }

exports["zoomeyeScrapeSearchResults"] = {
    "alias": [
        "zoomeye_scrape_search_results",
        "zyssr"
    ],
    "title": "Scrape ZoomEye Search Results",
    "description": "Performs first page scrape on ZoomEye search results",
    "types": [
        "*"
    ],
    "options": {}
}

exports["zoomeyeScrapeSearchResults"].load = function () { return require("./zoomeye")["zoomeyeScrapeSearchResults"] }
