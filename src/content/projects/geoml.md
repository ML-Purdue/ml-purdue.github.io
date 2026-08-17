---
name: Geospatial Machine Learning Research Group (GeoML)
desc: >-
  CNN-LSTM models correcting NASA satellite pollutant forecasts against real
  ground-station measurements.
status: archived
startTerm: 2025-fall
endTerm: 2025-fall
pm: Aakarsh Rai
advisor: Prof. Guang Lin, Dr. Gary Doran, Dr. Sina Hasheminassab
domain: [Computer Vision, Time Series Modelling]
hoursPerWeek: "10-15"
openings: "5"
skills: >-
  Python and related libraries (NumPy, Pandas/Xarray, PyTorch). Related SWE and
  DevOps skills for data workflows and model deployment. Statistical and data
  analysis, theoretical ML knowledge, and data visualization.
---

## Overview

GEOS-FP (Goddard Earth Observing System, Forward Processing) is a data product
created from GEOS, an integrated Earth system model. GEOS-FP uses a numerical
weather prediction model — physical and chemical — to provide real-time
meteorological data, including atmospheric concentration of several pollutants
at 2.5μm: dust, sea salt, organic carbon, brown carbon, and sulfate.

These predicted concentrations do not match observed concentrations from ground
stations and on-site monitoring. We used a combined convolutional neural network
and long short-term memory model to correct those biases.

GEOS-FP provides several other parameters that may improve the model, such as
atmospheric boundary layer height, wind speed and direction, and land-based
organic matter measurements. We analyzed the correcting power of each.

## Training

1. Basic dataset manipulation (NumPy, Pandas)
2. Understanding of common data formats used in atmospheric sciences (HDF5 and
   NetCDF3/NetCDF4)
3. General understanding of neural networks, specifically convolutional and time
   series based
4. General atmospheric and earth science principles were a bonus, taught along
   the way

Group meeting once a week (mandatory), with optional meetings with professors
and scientists one to three times a week.
