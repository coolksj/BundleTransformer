﻿namespace BundleTransformer.Less.HttpHandlers
{
	using System.Web.Caching;

	using Core;
	using Core.Configuration;
	using Core.Assets;
	using Core.FileSystem;
	using Core.HttpHandlers;
	using Core.Translators;

	/// <summary>
	/// Base class of the debugging HTTP-handler that responsible for text output 
	/// of translated LESS-asset
	/// </summary>
	public abstract class LessAssetHandlerBase : AssetHandlerBase
	{
		/// <summary>
		/// Asset content type
		/// </summary>
		public override string ContentType
		{
			get { return Core.Constants.ContentType.Css; }
		}


		/// <summary>
		/// Constructs a instance of base LESS asset handler
		/// </summary>
		/// <param name="cache">Server cache</param>
		/// <param name="virtualFileSystemWrapper">Virtual file system wrapper</param>
		/// <param name="assetHandlerConfig">Configuration settings of the debugging HTTP-handler,
		/// that responsible for text output of processed asset</param>
		protected LessAssetHandlerBase(Cache cache,
			IVirtualFileSystemWrapper virtualFileSystemWrapper,
			AssetHandlerSettings assetHandlerConfig)
			: base(cache, virtualFileSystemWrapper, assetHandlerConfig)
		{ }


		/// <summary>
		/// Translates a code of asset written on LESS to CSS-code
		/// </summary>
		/// <param name="asset">Asset with code written on LESS</param>
		/// <param name="isDebugMode">Flag that web application is in debug mode</param>
		/// <returns>Asset with translated code</returns>
		protected override IAsset ProcessAsset(IAsset asset, bool isDebugMode)
		{
			ITranslator lessTranslator = BundleTransformerContext.Current.GetCssTranslatorInstance(
				Core.Constants.TranslatorName.LessTranslator);
			lessTranslator.IsDebugMode = isDebugMode;

			IAsset processedAsset = lessTranslator.Translate(asset);

			return processedAsset;
		}
	}
}