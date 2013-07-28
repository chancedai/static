function FindProxyForURL(url, host) {
  if (shExpMatch(url, "*dc.sina.com.cn/*")||shExpMatch(url, "*bq69.com/*")||shExpMatch(url, "*liniyan.com/*")) {
		return "PROXY 192.168.1.6";
	}
	return "DIRECT";
}
